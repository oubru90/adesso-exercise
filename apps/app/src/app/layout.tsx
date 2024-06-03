import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider, Layout } from 'antd';

import './global.css';
import Header from '../_components/Header';

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
          <ConfigProvider>
            <App>
              <Layout style={{ minHeight: "100vh", paddingTop: '5rem', paddingBottom: "2rem" }}>
                <Header />
                {children}
              </Layout>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
