const deletePostMutation = `
  mutation deletePost($input: deletePostInput!) {
    deletePost(input: $input) {
      post {
        id
      }
    }
  }
`;

export default deletePostMutation;
