import { Post } from "@adesso-exercise/commons";
import { CommentOutlined, DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import Paragraph from "antd/lib/typography/Paragraph";
import DeletePostButton from "./DeletePostButton";

interface UserPostsListProps {
  posts: Post[];
}

export default function UserPostsList({ posts }: UserPostsListProps) {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      {posts.map(post => (

        <Card
          key={post.id}
          actions={[
            <DeletePostButton id={post.id} />,
            <Button type="text" icon={<CommentOutlined />}>
              {post.comments.totalCount} Comments
            </Button>,
            <Button type="text" icon={<ShareAltOutlined />}>
              Share
            </Button>,
          ]}
        >
          <a href={`/${post.id}`}>
            <Meta
              title={post.title}
              description={post.user.name}
            />
            <Paragraph ellipsis={{ rows: 2 }}>{post.body}</Paragraph>
          </a>
        </Card>
      ))}
    </Space>
  );
}
