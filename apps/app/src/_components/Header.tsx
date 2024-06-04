import { getSession } from "@adesso-exercise/commons";
import { Button, Form, Space } from "antd";
import { Header } from "antd/lib/layout/layout";

import styles from './Header.module.css';
import LogoutButton from "./LogoutButton";
import ChangeLanguageButton from "./ChangeLanguageButton";
import { Locale, getDictionary } from "../app/[lang]/dictionaries";

export default async function PageHeader({ lang }: { lang: Locale }) {
  const user = await getSession();
  const dict = await getDictionary(lang);

  return (
    <Header className={styles.header} >
      <div>
        <a href={"/" + lang}>
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
              {dict.header.profile}
            </Button>
            <LogoutButton>
              {dict.header.logout}
            </LogoutButton>
          </Space>
        )}
      </div>
    </Header >
  )
}
