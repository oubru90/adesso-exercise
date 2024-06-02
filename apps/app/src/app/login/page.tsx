'use client'

import { Button, Card, Form, Row, Col, Input, Flex, Alert } from 'antd';
import { useFormState, useFormStatus } from 'react-dom'
import FormItem from 'antd/lib/form/FormItem';

import InputPassword from 'antd/lib/input/Password';
import Title from 'antd/lib/typography/Title';

import { loginUser } from '../../lib/actions';

export type LoginFieldType = {
  id: string;
  password?: string;
};

export default function Login() {
  const [errorMessage, dispatch] = useFormState(loginUser, undefined)
  const { pending } = useFormStatus();

  return (
    <Flex align={"center"} flex={1}>
      <Row style={{ width: "100%" }}>
        <Col span={12} offset={6} >
          <Card>
            <Title level={2}>Login</Title>
            {errorMessage ? <Alert message={errorMessage} type="error" showIcon /> : null}
            <Form
              disabled={pending}
              layout="vertical"
              name="login"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
              onFinish={(formData) => dispatch(formData)}
            >
              <FormItem<LoginFieldType>
                label="User ID (ex: 6942526)"
                name="id"
                rules={[{ required: true, message: 'Please input your user ID!' }]}
              >
                <Input />
              </FormItem>

              <FormItem<LoginFieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <InputPassword />
              </FormItem>

              <Flex justify={"space-between"}>
                <FormItem>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </FormItem>
                <Button type="link" href='/register'>
                  Register
                </Button>
              </Flex>
            </Form>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
}
