const deleteUserMutation = `
  mutation deleteUser($input: deleteUserInput!) {
    deleteUser(input: $input) {
      user {
        id
      }
    }
  }
`;

export default deleteUserMutation;
