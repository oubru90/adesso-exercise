'use server';
import { PostDetailsResponse, doGoRestRequest, getSession } from "@adesso-exercise/commons"
import postDetailsQuery from "../../../lib/graphql/postDetailsQuery"
import { Button, Card, Col, Divider, Layout, List, Row } from "antd";
import ListItem, { Meta } from "antd/lib/list/Item";
import Paragraph from "antd/lib/typography/Paragraph";
import DeletePostButton from "../../../_components/DeletePostButton";
import SharePostButton from "../../../_components/SharePostButton";
import { Locale, getDictionary } from "../dictionaries";

export default async function PostDetail({ params }: { params: { lang: Locale, post: string } }) {
  const userSession = await getSession();
  const dict = await getDictionary(params.lang);
  let postDetails: PostDetailsResponse;
  try {
    postDetails = await doGoRestRequest(postDetailsQuery, { id: params.post });
  } catch (error) {
    return (
      <Layout>
        <h1>{dict.errors['404']}</h1>
      </Layout>
    )
  }
  const isOwner = userSession.user.id === postDetails.post.user.id;

  return (
    <Layout>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
          <Card
            title={postDetails.post.title}
            actions={[
              <DeletePostButton
                disabled={!isOwner}
                id={postDetails.post.id}
              >
                {dict.post.delete}
              </DeletePostButton>,
              <SharePostButton
                post={postDetails.post}
              >
                {dict.post.share}
              </SharePostButton>
            ]}
          >
            <Paragraph >
              {postDetails.post.body}
            </Paragraph>
          </Card>
          <Divider>{dict.post.comments}</Divider>
          <Card>
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
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}
