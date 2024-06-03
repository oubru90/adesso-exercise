import { Form, Input, Button, Space, Alert, Flex } from 'antd';
import { loginUser } from '../../lib/actions';

import FormItem from 'antd/lib/form/FormItem';
import InputPassword from 'antd/lib/input/Password';
import { redirect } from 'next/navigation';

export type AdminLoginFieldType = {
  username: string;
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
          "use server";
          await loginUser(null, formData);
          redirect("/");
        }}
      >
        <FormItem<AdminLoginFieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your user ID!' }]}
        >
          <Input />
        </FormItem>

        <FormItem<AdminLoginFieldType>
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
        </Flex>
      </Form>
    </Space>
  );
};
