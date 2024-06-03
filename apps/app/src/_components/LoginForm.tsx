import { Form, Input, Button, Space, Alert, Flex } from 'antd';

import FormItem from 'antd/lib/form/FormItem';
import InputPassword from 'antd/lib/input/Password';
import { loginUser } from '../lib/actions';
import { redirect } from 'next/navigation';

export type LoginFieldType = {
  id: string;
  password?: string;
};

export default async function LoginForm() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Form
        layout="vertical"
        name="login"
        autoComplete="off"
        onFinish={async (formData) => {
          'use server';
          await loginUser(null, formData);
          redirect("/");
        }}
      >
        <FormItem<LoginFieldType>
          label={`User ID (ex: 6942526)`}
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
    </Space >
  );
};
