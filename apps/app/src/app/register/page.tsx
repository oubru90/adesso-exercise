'use client'

import { Button, Card, Form, Row, Col, Input, Flex, Alert } from 'antd';
import { useFormState, useFormStatus } from 'react-dom'
import FormItem from 'antd/lib/form/FormItem';

import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import Title from 'antd/lib/typography/Title';

import { register } from '../../lib/actions';
import { getDictionary } from '../dictionaries';

export type RegisterFieldType = {
  email?: string;
  name?: string;
  gender?: string;
};

export default function Register() {
  const [errorMessage, dispatch] = useFormState(register, undefined)
  const { pending } = useFormStatus();

  return (
    <Flex align={"center"} flex={1}>
      <Row style={{ width: "100%" }}>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
          <Card>
            <Title level={2}>Register</Title>
            {errorMessage ? <Alert message={errorMessage} type="error" showIcon /> : null}
            <Form
              disabled={pending}
              layout="vertical"
              name="register"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
              onFinish={(formData) => dispatch(formData)}
            >
              <FormItem<RegisterFieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input />
              </FormItem>

              <FormItem<RegisterFieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </FormItem>

              <FormItem<RegisterFieldType>
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please select your gender!' }]}
              >
                <RadioGroup>
                  <RadioButton value="male">Male</RadioButton>
                  <RadioButton value="female">Female</RadioButton>
                </RadioGroup>
              </FormItem>

              <Flex justify={"space-between"}>
                <FormItem>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </FormItem>
              </Flex>
            </Form>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
}
