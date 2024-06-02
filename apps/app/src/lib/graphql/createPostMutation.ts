const createPostMutation = `
mutation createPost($input: createPostInput!) {
  createPost(input: $input) {
    post {
      id
    }
  }
}
`;
export default createPostMutation;
