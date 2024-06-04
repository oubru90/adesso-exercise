'use client';
import { Button, Form } from "antd";
import { useFormState } from "react-dom";
import { logoutUser } from "../lib/actions";

export default function LogoutButton({ children }: { children: React.ReactNode }) {
  const [errorMessage, dispatch] = useFormState(logoutUser, undefined)

  return (
    <Form onFinish={() => dispatch()}>
      <Button
        htmlType="submit"
        type="text"
        style={{ color: 'white' }}
      >
        {children}
      </Button>
    </Form>
  )
}
