import { getSession } from "@adesso-exercise/commons";
import { Button, Form } from "antd";
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
            Adesso.it Backoffice
          </h3>
        </a>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        {user && (
          <LogoutButton />
        )}
      </div>
    </Header >
  )
}
