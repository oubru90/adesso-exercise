import { AntdRegistry } from '@ant-design/nextjs-registry';
import './global.css';
import { App, ConfigProvider, Layout } from 'antd';
import PageHeader from './_components/PageHeader';

export const metadata = {
  title: 'Backoffice',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={{
            token: {
              colorPrimary: '#ad4e00'
            }
          }} >
            <App>
              <Layout style={{ minHeight: "100vh", paddingTop: '5rem', paddingBottom: "2rem" }}>
                <PageHeader />
                {children}
              </Layout>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html >
  );
}
