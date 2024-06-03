'use client';

import { Button, Form } from "antd";
import { useFormState } from "react-dom";
import { changeUserLocale } from "../lib/actions";

export default function ChangeLanguageButton() {
  const [_, dispatch] = useFormState(changeUserLocale, undefined)

  return (
    <Form onFinish={dispatch}>
      <Button
        htmlType="submit"
        type="text"
        style={{ color: 'white' }}
      >
        IT / EN
      </Button>
    </Form>
  )
}
