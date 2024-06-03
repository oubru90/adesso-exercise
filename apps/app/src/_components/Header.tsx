import { getSession } from "@adesso-exercise/commons";
import { Button, Form, Space } from "antd";
import { Header } from "antd/lib/layout/layout";

import styles from './Header.module.css';
import LogoutButton from "./LogoutButton";

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
        {user && (
          <Space>
            <Button type="text" href="/profile" style={{ color: 'white' }}>
              Profile
            </Button>
            <LogoutButton />
          </Space>
        )}
      </div>
    </Header >
  )
}
