import { Card, Row, Col, Flex } from 'antd';

import Title from 'antd/lib/typography/Title';
import LoginForm from '../../../_components/LoginForm';
import { Locale, getDictionary } from '../dictionaries';

export default async function Login({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <Flex align={"center"} flex={1}>
      <Row style={{ width: "100%" }}>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
          <Card>
            <Title level={2}>{dict.login.title}</Title>
            <LoginForm
              lang={lang}
              dict={dict}
            />
          </Card>
        </Col>
      </Row>
    </Flex>
  );
}
