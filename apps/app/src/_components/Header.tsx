import { getSession } from "@adesso-exercise/commons";
import { Button, Form } from "antd";
import { Header } from "antd/lib/layout/layout";
import { logoutUser } from "../lib/actions";

export default async function PageHeader() {
  const user = await getSession();

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <h3 style={{ color: 'white', margin: 0 }}>Adesso.it</h3>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        {user && (
          <Form onFinish={logoutUser}>
            <Button
              htmlType="submit"
              type="text"
              style={{ color: 'white' }}
            >
              Logout
            </Button>
          </Form>

        )}
      </div>
    </Header >
  )
}
