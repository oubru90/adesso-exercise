const createUserMutation = `
mutation createUser($input: createUserInput!) {
  createUser(input: $input) {
    user {
      id
      email
      name
      gender
      status
    }
  }
}
`;
export default createUserMutation;
