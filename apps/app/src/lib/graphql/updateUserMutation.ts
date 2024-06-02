const updateUserMutation = `
mutation UpdateUserMutation($input: updateUserInput!) {
  updateUser(input: $input) {
    user {
      id
      email
      name
      gender
    }
  }
}
`;

export default updateUserMutation;
