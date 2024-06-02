import { getSession } from "@adesso-exercise/commons";
import { Button, Form, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import { logoutUser } from "../lib/actions";

import styles from './Header.module.css';

export default async function PageHeader() {
  const user = await getSession();

  return (
    <Header className={styles.header} >
      <div>
        <a href="/">
          <h3 style={{ color: 'white', margin: 0 }}>
            Adesso.it
          </h3>
        </a>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <Button type="text" href="/profile" style={{ color: 'white' }}>
          Profile
        </Button>
        {user && (
          <Space>
            <Button type="text" href="/profile" style={{ color: 'white' }}>
              Profile
            </Button>
            <Form onFinish={logoutUser}>
              <Button
                htmlType="submit"
                type="text"
                style={{ color: 'white' }}
              >
                Logout
              </Button>
            </Form>
          </Space>
        )}
      </div>
    </Header >
  )
}
