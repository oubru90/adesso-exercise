import { StopOutlined } from "@ant-design/icons";
import { App, Button, Popconfirm } from "antd";
import { useState } from "react";

interface BlockUserButtonProps {
  userId: number;
  onFinish: () => void;
}

export default function BlockUserButton({ userId, onFinish }: BlockUserButtonProps) {
  const { message } = App.useApp();
  const [loading, setLoading] = useState<boolean>(false);

  const blockUser = () => {
    setLoading(true);
    fetch('/api/users/' + userId, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'inactive' }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      message.success(`User ${userId} blocked`);
      onFinish();
      setLoading(false);
    }).catch(() => {
      message.error(`Failed to block user ${userId}`);
      setLoading(false);
    });
  }

  return (
    <Popconfirm
      title="Block User"
      description="Are you sure to block this user?"
      onConfirm={blockUser}
      okText="Yes"
      cancelText="No"
    >
      <Button
        danger
        type="text"
        icon={<StopOutlined />}
        disabled={loading}
      >
        Block
      </Button>
    </Popconfirm>
  )
}
