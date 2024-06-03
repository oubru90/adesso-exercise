'use client';
import { Button, Form } from "antd";
import { useFormState } from "react-dom";
import { logoutUser } from "../lib/actions";

export default async function LogoutButton() {
  const [errorMessage, dispatch] = useFormState(logoutUser, undefined)

  return (
    <Form onFinish={() => dispatch()}>
      <Button
        htmlType="submit"
        type="text"
        style={{ color: 'white' }}
      >
        Logout
      </Button>
    </Form>
  )
}
