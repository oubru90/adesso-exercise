import { Col, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import EditProfileForm from "../../_components/EditProfileForm";
import DeleteUserButton from "../../_components/DeleteUserButton";
import { doGoRestRequest, getSession } from "@adesso-exercise/commons";
import getUserQuery from "../../lib/graphql/getUserQuery";
import { getDictionary } from "../dictionaries";

export default async function ProfilePage() {
  const sessionUser = await getSession();
  const { user } = await doGoRestRequest(getUserQuery, { id: sessionUser.user.id });
  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
        <Title>Profile</Title>
        <EditProfileForm
          user={user}
        />
        <Divider>Extras</Divider>
        <DeleteUserButton
          userId={user.id}
        />
      </Col>
    </Row>
  );
}
