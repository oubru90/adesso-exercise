import { Card, Row, Col, Flex } from 'antd';

import Title from 'antd/lib/typography/Title';
import LoginForm from '../../_components/LoginForm';

export default async function Login() {
  return (
    <Flex align={"center"} flex={1}>
      <Row style={{ width: "100%" }}>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
          <Card>
            <Title level={2}>Login</Title>
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </Flex>
  );
}
