const usersQuery = `
query users($after: String, $before:String, $first: Int, $last: Int) {
  users(after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        id
      }
    }
    nodes {
      id
      name
      email
      gender
      status
    }
  }
}
`;

export default usersQuery;
