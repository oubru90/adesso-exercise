'use client';

import { Post } from "@adesso-exercise/commons";
import { CommentOutlined, DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import Paragraph from "antd/lib/typography/Paragraph";
import DeletePostButton from "./DeletePostButton";

import Text from "antd/lib/typography/Text";
import SharePostButton from "./SharePostButton";

interface UserPostsListProps {
  posts: Post[];
  dict: any;
}

export default function UserPostsList({ posts, dict }: UserPostsListProps) {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      {posts.map(post => (
        <Card
          key={post.id}
          actions={[
            <DeletePostButton
              disabled={false}
              id={post.id}
            >
              {dict.post.delete}
            </DeletePostButton>,
            <SharePostButton post={post}>
              {dict.post.share}
            </SharePostButton>
          ]}
        >
          <a href={`/${post.id}`}>
            <Meta
              title={post.title}
              description={post.user.name}
            />
            <Space direction="vertical">
              <Paragraph ellipsis={{ rows: 2 }}>{post.body}</Paragraph>
              <Text>
                <CommentOutlined /> {post.comments.totalCount} {dict.post.comments}
              </Text>
            </Space>
          </a>
        </Card>
      ))}
    </Space>
  );
}
