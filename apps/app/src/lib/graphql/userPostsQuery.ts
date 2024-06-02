const userPostsQuery = `
  query userPosts($userId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
    user(id: $userId) {
      id
      name
      email
      posts(after: $after, before: $before, first: $first, last: $last) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        nodes {
          id
          title
          body
          user {
            id
            name
          }
          comments {
            totalCount
          }
        }
      }
    }
  }
`;

export default userPostsQuery;
