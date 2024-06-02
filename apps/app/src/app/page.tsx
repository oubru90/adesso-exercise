import { getSession } from '@adesso-exercise/commons';
import { Button } from 'antd';

export default async function Index() {
  const user = await getSession();

  console.log(user);
  return (
    <div className="App">
      <Button type="primary">AA</Button>
    </div>
  );
}
