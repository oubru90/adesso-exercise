'use server';

import { PostDetailsResponse, doGoRestRequest } from "@adesso-exercise/commons"
import postDetailsQuery from "../../lib/graphql/postDetailsQuery"
import { Button, Card, Col, Divider, Layout, List, Row } from "antd";
import ListItem, { Meta } from "antd/lib/list/Item";
import Paragraph from "antd/lib/typography/Paragraph";
import DeletePostButton from "../../_components/DeletePostButton";
import { EditOutlined, ShareAltOutlined } from "@ant-design/icons";
import SharePostButton from "../../_components/SharePostButton";

export default async function PostDetail({ params }: { params: { post: string } }) {
  const postDetails: PostDetailsResponse = await doGoRestRequest(postDetailsQuery, { id: params.post });

  return (
    <Layout>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
          <Card
            title={postDetails.post.title}
            actions={[
              <DeletePostButton id={postDetails.post.id} />,
              <SharePostButton post={postDetails.post} />
            ]}
          >
            <Paragraph >
              {postDetails.post.body}
            </Paragraph>
          </Card>
          <Divider>Comments</Divider>
          <List
            itemLayout="horizontal"
            dataSource={postDetails.post.comments.nodes}
          >
            {postDetails.post.comments.nodes.map((comment) => (
              <ListItem key={comment.id}>
                <Meta
                  title={comment.name + " (" + comment.email + ")"}
                  description={comment.body}
                />
              </ListItem>
            ))}
          </List>
        </Col>
      </Row>
    </Layout>
  )
}
