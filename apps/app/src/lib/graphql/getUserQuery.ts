const getUserQuery = `
  query getUserQuery($id: ID!) {
    user(id: $id) {
      id
      name
      email
      status
    }
  }
`;

export default getUserQuery;
