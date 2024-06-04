'use client';

import { Button, Popconfirm } from "antd";
import { useFormState } from "react-dom";
import { deleteAccount } from "../lib/actions";

export default function DeleteUserButton({ userId, dict }: { userId: number, dict: any }) {
  const [errorMessage, dispatch] = useFormState(deleteAccount, undefined);

  return (
    <Popconfirm
      title={dict.profile.deleteUserMessage}
      onConfirm={() => dispatch(userId)}
      onCancel={() => console.log('cancel')}
      okText="Yes"
      cancelText="No"
    >
      <Button danger block>{dict.profile.deleteUser}</Button>
    </Popconfirm>
  )
}
