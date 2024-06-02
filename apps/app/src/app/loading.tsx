import { Flex, Spin } from 'antd';

export default function Loading() {
  return (
    <Flex align="center" justify='center' flex={1}>
      <Spin size="large" />
    </Flex>
  );
}
