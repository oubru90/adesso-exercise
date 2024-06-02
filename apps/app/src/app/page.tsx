import { doGoRestRequest, getSession, PostListsResponse } from '@adesso-exercise/commons';
import { Col, Divider, Row } from 'antd';

import Title from 'antd/lib/typography/Title';
import UserPostsList from '../_components/UserPostLists';
import userPostsQuery from '../lib/graphql/userPostsQuery';
import NewPostForm from '../_components/NewPostForm';

export default async function Index() {
  const { user } = await getSession();
  const posts: PostListsResponse = await doGoRestRequest(userPostsQuery, { userId: user.id, first: 50 });

  return (
    <Row>
      <Col span={12} offset={6}>
        <Title>Hello, {user?.name}</Title>
        <NewPostForm
          userId={user.id}
        />
        <Divider>Your posts</Divider>
        <UserPostsList
          posts={posts.user.posts.nodes}
        />

      </Col>
    </Row>
  );
}
