'use client';

import { DeleteOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { deletePost } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function DeletePostButton({ id }: { id: number }) {
  const [errorMessage, dispatch] = useFormState(deletePost, undefined)
  const { pending } = useFormStatus();

  return (
    <Form onFinish={() => dispatch(id)}>
      <Button
        htmlType="submit"
        type="text"
        icon={<DeleteOutlined />}
      >
        Delete
      </Button>
    </Form>
  )
}
