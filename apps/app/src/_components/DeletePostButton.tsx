'use client';

import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { deletePost } from "../lib/actions";
import { useFormState } from "react-dom";

export default function DeletePostButton({ id, disabled, children }: { id: number, disabled: boolean, children: React.ReactNode }) {
  const [errorMessage, dispatch] = useFormState(deletePost, undefined);

  return (
    <Popconfirm
      title="Delete the post"
      description="Are you sure to delete this post?"
      onConfirm={() => dispatch(id)}
      onCancel={() => console.log('cancel')}
      okText="Yes"
      cancelText="No"
    >
      <Button
        disabled={disabled}
        htmlType="submit"
        type="text"
        icon={<DeleteOutlined />}
      >
        {children}
      </Button>
    </Popconfirm>
  )
}
