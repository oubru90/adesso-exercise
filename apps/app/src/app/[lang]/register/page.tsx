import { Button, Card, Form, Row, Col, Input, Flex, Alert } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { redirect } from 'next/navigation';

import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import Title from 'antd/lib/typography/Title';

import { register } from '../../../lib/actions';
import { Locale, getDictionary } from '../dictionaries';

export type RegisterFieldType = {
  email?: string;
  name?: string;
  gender?: string;
};

export default async function Register({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <Flex align={"center"} flex={1}>
      <Row style={{ width: "100%" }}>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
          <Card>
            <Title level={2}>{dict.profile.register}</Title>
            <Form
              layout="vertical"
              name="register"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
              onFinish={async (formData) => {
                'use server';
                await register(null, formData)
                redirect("/" + lang);
              }}
            >
              <FormItem<RegisterFieldType>
                label={dict.profile.email}
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input />
              </FormItem>

              <FormItem<RegisterFieldType>
                label={dict.profile.name}
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </FormItem>

              <FormItem<RegisterFieldType>
                label={dict.profile.gender}
                name="gender"
                rules={[{ required: true, message: 'Please select your gender!' }]}
              >
                <RadioGroup>
                  <RadioButton value="male">{dict.profile.male}</RadioButton>
                  <RadioButton value="female">{dict.profile.female}</RadioButton>
                </RadioGroup>
              </FormItem>

              <Flex justify={"space-between"}>
                <FormItem>
                  <Button type="primary" htmlType="submit">
                    {dict.profile.register}
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
