import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider, Layout } from 'antd';

import './global.css';
import Header from '../../_components/Header';
import { Locale, getDictionary } from './dictionaries';

export const metadata = {
  title: 'App',
  description: 'App frontend',
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body>
        <AntdRegistry>
          <ConfigProvider>
            <App>
              <Layout style={{ minHeight: "100vh", paddingTop: '5rem', paddingBottom: "2rem" }}>
                <Header
                  lang={params.lang}
                />
                {children}
              </Layout>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
