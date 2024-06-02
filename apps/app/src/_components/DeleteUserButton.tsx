'use client';

import { Button, Popconfirm } from "antd";
import { useFormState } from "react-dom";
import { deleteAccount } from "../lib/actions";

export default async function DeleteUserButton({ userId }: { userId: number }) {
  const [errorMessage, dispatch] = useFormState(deleteAccount, undefined);

  return (
    <Popconfirm
      title="Delete your profile"
      description="Are you sure to delete yur profile?"
      onConfirm={() => dispatch(userId)}
      onCancel={() => console.log('cancel')}
      okText="Yes"
      cancelText="No"
    >
      <Button danger block>Delete your profile</Button>
    </Popconfirm>
  )
}
