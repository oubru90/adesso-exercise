'use client';

import { SaveOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";

import FormItem from "antd/lib/form/FormItem";
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import { useFormState } from "react-dom";
import { editProfile } from "../lib/actions";
import { User } from "@adesso-exercise/commons";

export interface EditProfileFieldType {
  id: string
  email: string
  name: string
  gender: string
}

export default function EditProfileForm({ user, dict }: { user: User, dict: any }) {
  const [errorMessage, dispatch] = useFormState(editProfile, undefined);

  return (
    <Card
      bordered={false}
      actions={[
        <Button
          htmlType="submit"
          form="editProfileForm"
          icon={<SaveOutlined />}
        >
          {dict.profile.save}
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
          label={dict.profile.userID}
          name="id"
        >
          <Input disabled />
        </FormItem>

        <FormItem<EditProfileFieldType>
          label={dict.profile.email}
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </FormItem>

        <FormItem<EditProfileFieldType>
          label={dict.profile.name}
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </FormItem>

        <FormItem<EditProfileFieldType>
          label={dict.profile.gender}
          name="gender"
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <RadioGroup>
            <RadioButton value="male">{dict.profile.male}</RadioButton>
            <RadioButton value="female">{dict.profile.female}</RadioButton>
          </RadioGroup>
        </FormItem>
      </Form>
    </Card>
  );
}
