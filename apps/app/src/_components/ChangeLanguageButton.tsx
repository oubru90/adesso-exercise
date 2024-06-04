'use client';
import { Button, Dropdown } from "antd";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function ChangeLanguageButton() {
  const pathName = usePathname();

  const items = [
    {
      label: <a href={pathName.replace("/it", "/en")}>EN</a>,
      key: 'en',
    },
    {
      label: <a href={pathName.replace("/en", "/en")}>IT</a>,
      key: 'it',
    }
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button
        htmlType="submit"
        type="text"
        style={{ color: 'white' }}
      >
        IT/EN
      </Button>
    </Dropdown>
  )
}
