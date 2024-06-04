import { Layout } from 'antd';
import { Locale, getDictionary } from './dictionaries';

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <Layout>
      <h1>404 - {dict.errors["404"]}</h1>
    </Layout>
  );
}
