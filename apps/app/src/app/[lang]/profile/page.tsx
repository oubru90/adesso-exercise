import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import EditProfileForm from "../../../_components/EditProfileForm";
import DeleteUserButton from "../../../_components/DeleteUserButton";
import { doGoRestRequest, getSession } from "@adesso-exercise/commons";
import getUserQuery from "../../../lib/graphql/getUserQuery";
import { Locale, getDictionary } from "../dictionaries";

export default async function ProfilePage({ params: { lang } }: { params: { lang: Locale } }) {
  const sessionUser = await getSession();
  const { user } = await doGoRestRequest(getUserQuery, { id: sessionUser.user.id });
  const dict = await getDictionary(lang);

  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
        <Title>{dict.profile.title}</Title>
        <EditProfileForm
          dict={dict}
          user={user}
        />
        <Divider />
        <DeleteUserButton
          dict={dict}
          userId={user.id}
        />
      </Col>
    </Row>
  );
}
