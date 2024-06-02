'use client';

import { Alert, Button, Card, Form, Input } from "antd";
import { SendOutlined } from '@ant-design/icons';
import FormItem from "antd/lib/form/FormItem";
import InputTextArea from "antd/lib/input/TextArea";
import { useFormState, useFormStatus } from "react-dom";
import { createNewPost } from "../lib/actions";

export type NewPostFieldType = {
  title?: string;
  body?: string;
};

export default function NewPostForm({ userId }: { userId: number }) {
  const [errorMessage, dispatch] = useFormState(createNewPost, undefined)
  const { pending } = useFormStatus();

  return (
    <Card
      loading={pending}
      title="New post"
      bordered={false}
      actions={[
        <Button
          htmlType="submit"
          form="newPostForm"
          icon={<SendOutlined />}
        >
          Send
        </Button>
      ]}
    >
      {errorMessage ? <Alert message={errorMessage} type="error" showIcon /> : null}
      <Form
        id="newPostForm"
        layout="vertical"
        onFinish={dispatch}
      >
        <FormItem hidden name="userId" initialValue={userId} />
        <FormItem<NewPostFieldType>
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please insert title' }]}
        >
          <Input />
        </FormItem>
        <FormItem<NewPostFieldType>
          name="body"
          label="Text"
          rules={[
            { max: 500, message: 'Max 500 characters' },
            { required: true, message: 'Please insert text' }
          ]}
        >
          <InputTextArea
            showCount
            maxLength={500}
          />
        </FormItem>
      </Form>
    </Card >
  );
}
