'use client';

import { SaveOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";

import FormItem from "antd/lib/form/FormItem";
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import { useFormState, useFormStatus } from "react-dom";
import { editProfile } from "../lib/actions";
import { User } from "@adesso-exercise/commons";

export interface EditProfileFieldType {
  id: string
  email: string
  name: string
  gender: string
}

export default async function EditProfileForm({ user }: { user: User }) {
  const [errorMessage, dispatch] = useFormState(editProfile, undefined)
  const { pending } = useFormStatus();

  return (
    <Card
      title="Edit your profile"
      bordered={false}
      actions={[
        <Button
          htmlType="submit"
          form="editProfileForm"
          icon={<SaveOutlined />}
        >
          Save
        </Button>
      ]}
    >
      <Form
        id="editProfileForm"
        layout="vertical"
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={(formData) => dispatch(formData)}
        initialValues={user}
      >
        <FormItem<EditProfileFieldType>
          label="ID"
          name="id"
        >
          <Input disabled />
        </FormItem>

        <FormItem<EditProfileFieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </FormItem>

        <FormItem<EditProfileFieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </FormItem>

        <FormItem<EditProfileFieldType>
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <RadioGroup>
            <RadioButton value="male">Male</RadioButton>
            <RadioButton value="female">Female</RadioButton>
          </RadioGroup>
        </FormItem>
      </Form>
    </Card>
  );
}
