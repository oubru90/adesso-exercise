interface GraphQLResponse {
  data: any;
  errors: Error[];
}

const doGoRestRequest = async (query: string, variables: any) => {
  const requestBody = {
    query,
    variables
  };
  const response = await fetch('https://gorest.co.in/public/v2/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify(requestBody)
  });
  const gqlResponse: GraphQLResponse = await response.json();
  if (gqlResponse.errors && gqlResponse.errors.length > 0) {
    throw new Error(JSON.stringify(gqlResponse.errors));
  }

  return gqlResponse.data;
}

export { doGoRestRequest };

export default doGoRestRequest;
