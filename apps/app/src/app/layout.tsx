import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, Layout } from 'antd';

import './global.css';
import Header from '../_components/Header';
import { cookies } from 'next/headers';
import { detectUserLanguage } from '@adesso-exercise/commons';

export const metadata = {
  title: 'App',
  description: 'App frontend',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AntdRegistry>
          <App>
            <Layout style={{ minHeight: "100vh", paddingTop: '5rem', paddingBottom: "2rem" }}>
              <Header />
              {children}
            </Layout>
          </App>
        </AntdRegistry>
      </body>
    </html>
  );
}
