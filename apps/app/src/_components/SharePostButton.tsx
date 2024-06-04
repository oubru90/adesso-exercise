'use client';
import { Post } from '@adesso-exercise/commons';
import { ShareAltOutlined } from '@ant-design/icons';
import { App, Button } from 'antd';

export default function SharePostButton({ post, children }: { post: Post, children: React.ReactNode }) {
  const { message } = App.useApp();
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText('http://app.adesso.localhost:3000/' + post.id);
        message.info("Post url copied");
      }}
      type="text"
      icon={<ShareAltOutlined />}
    >
      {children}
    </Button>
  )
}
