'use client';

import { DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Popconfirm } from "antd";
import { deletePost } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function DeletePostButton({ id }: { id: number }) {
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
        htmlType="submit"
        type="text"
        icon={<DeleteOutlined />}
      >
        Delete
      </Button>
    </Popconfirm>
  )
}
