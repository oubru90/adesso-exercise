'use client';

import { User } from "@adesso-exercise/commons";
import { App, Space, Table } from "antd";
import { useEffect, useState } from "react";
import BlockUserButton from "./BlockUserButton";

interface Pagination {
  current: number;
  pageSize: number;
}

interface UsersList {
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  }
  users: User[];
}

export default function UsersTable() {
  const { message } = App.useApp();
  const initialData: UsersList = { users: [], pagination: { total: 0, page: 0, limit: 0, pages: 0 } }
  const [data, setData] = useState<UsersList>(initialData);
  const [tableLoading, setTableLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 15,
  });

  const fetchData = () => {
    setTableLoading(true);
    const params = new URLSearchParams({
      page: pagination.current.toString(),
      per_page: pagination.pageSize.toString(),
    }).toString();
    fetch('/api/users?' + params)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTableLoading(false);
      }).catch(() => {
        message.error('Failed to fetch users');
        setTableLoading(false);
        setData(initialData);
      });
  };

  useEffect(() => {
    fetchData();
  }, [pagination]);

  return (
    <Table
      loading={tableLoading}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
        },
        {
          title: '',
          key: 'action',
          render: (_, record: User) => (
            <Space size="middle">
              {record.status === 'active' && (
                <BlockUserButton
                  userId={record.id}
                  onFinish={() => {
                    // OPTIMISTIC UPDATE
                    setData((data) => ({
                      ...data,
                      users: data.users.map((user) => {
                        if (user.id === record.id) {
                          return { ...user, status: 'inactive' };
                        }
                        return user;
                      }),
                    }));
                  }}
                />
              )}
            </Space>
          ),
        },
      ]}
      dataSource={data.users}
      pagination={{
        total: data.pagination?.total || 0,
        pageSize: pagination.pageSize,
        pageSizeOptions: [pagination.pageSize],
        position: ['bottomRight'],
        current: pagination.current,
        onChange: (page) => setPagination((pagination) => ({ ...pagination, current: page })),
      }}
    />
  )
}
