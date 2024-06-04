import { doGoRestRequest, getSession, PostListsResponse } from '@adesso-exercise/commons';
import { Col, Divider, Row } from 'antd';

import Title from 'antd/lib/typography/Title';
import UserPostsList from '../../_components/UserPostLists';
import userPostsQuery from '../../lib/graphql/userPostsQuery';
import NewPostForm from '../../_components/NewPostForm';
import { getDictionary, Locale } from './dictionaries';

export default async function Index({ params: { lang } }: { params: { lang: Locale } }) {
  const { user } = await getSession();
  const posts: PostListsResponse = await doGoRestRequest(userPostsQuery, { userId: user.id, first: 50 });
  const dict = await getDictionary(lang)

  return (
    <Row>
      <Col span={12} offset={6}>
        <Title>{dict.home.hello}, {user?.name}</Title>
        <NewPostForm
          dict={dict}
          userId={user.id}
        />
        <Divider>{dict.home.yourPosts}</Divider>
        <UserPostsList
          dict={dict}
          posts={posts.user.posts.nodes}
        />
      </Col>
    </Row>
  );
}
