const getUserQuery = `
  query getUserQuery($id: ID!) {
    user(id: $id) {
      id
      name
      email
      gender
      status
    }
  }
`;

export default getUserQuery;
