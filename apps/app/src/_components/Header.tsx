'use client';

import { getSession } from "@adesso-exercise/commons";
import { Button, Form, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import { logoutUser } from "../lib/actions";

import styles from './Header.module.css';
import { getDictionary } from "../app/dictionaries";
import ChangeLanguageButton from "./ChangeLanguageButton";

export default async function PageHeader() {
  const user = await getSession();
  const dictionary = await getDictionary();

  console.log(dictionary);

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
        <ChangeLanguageButton />
        {user && (
          <Space>
            <Button type="text" href="/profile" style={{ color: 'white' }}>
              {dictionary.header.profie}
            </Button>
            <Form onFinish={logoutUser}>
              <Button
                htmlType="submit"
                type="text"
                style={{ color: 'white' }}
              >
                {dictionary.header.logout}
              </Button>
            </Form>
          </Space>
        )}
      </div>
    </Header >
  )
}
