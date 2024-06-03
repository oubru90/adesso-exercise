import { Col, Flex, Row, Space } from "antd";

import Title from "antd/lib/typography/Title";
import UsersTable from "./_components/UsersTable";

export default async function Index() {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Flex vertical gap={16}>
          <Title>Welcome to backoffice!</Title>
          <UsersTable />
        </Flex>
      </Col>
    </Row>
  );
}
