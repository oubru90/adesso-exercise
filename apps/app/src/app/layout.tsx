import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, Layout } from 'antd';

import './global.css';
import Header from '../_components/Header';

export const metadata = {
  title: 'App',
  description: 'App frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <App>
            <Layout style={{ minHeight: "100vh" }}>
              <Header />
              {children}
            </Layout>
          </App>
        </AntdRegistry>
      </body>
    </html>
  );
}
