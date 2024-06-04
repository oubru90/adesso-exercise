import { Form, Input, Button, Space, Alert, Flex } from 'antd';

import FormItem from 'antd/lib/form/FormItem';
import InputPassword from 'antd/lib/input/Password';
import { loginUser } from '../lib/actions';
import { redirect } from 'next/navigation';
import { Locale } from '../app/[lang]/dictionaries';

export type LoginFieldType = {
  id: string;
  password?: string;
};

export default async function LoginForm({ dict, lang }: { dict: any, lang: Locale }) {
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
          label={`${dict.login.userID} (ex: 6942526)`}
          name="id"
          rules={[{ required: true, message: dict.login.userIDRequired }]}
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
              {dict.login.login}
            </Button>
          </FormItem>
          <Button type="link" href={'/' + lang + '/register'} >
            {dict.login.register}
          </Button>
        </Flex>
      </Form>
    </Space >
  );
};
