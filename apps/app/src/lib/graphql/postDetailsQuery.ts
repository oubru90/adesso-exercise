const postDetailsQuery = `
  query PostDetails($id: ID!, $after: String, $before: String, $first: Int, $last: Int) {
    post(id: $id) {
      id
      title
      body
      user {
        id
        name
      }
      comments(after: $after, before: $before, first: $first, last: $last) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        nodes {
          id
          name
          email
          body
        }
      }
    }
  }
`;
export default postDetailsQuery;
