import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function PATCH(request: Request, context: { params: Params }) {
  const userId = context.params.userId;
  const body = await request.json();
  const response = await fetch(
    `https://gorest.co.in/public/v2/users/${userId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(body)
    }
  );
  const user = await response.json();
  return new Response(JSON.stringify(user));
}
