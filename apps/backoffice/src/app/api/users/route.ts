export async function GET(request: Request) {
  const params = request.url.split('?')[1] || '';
  const response = await fetch(
    'https://gorest.co.in/public/v2/users?' + params,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );
  const users = await response.json();
  return new Response(JSON.stringify({
    pagination: {
      total: parseInt(response.headers.get('x-pagination-total') || '0'),
      pages: parseInt(response.headers.get('x-pagination-pages') || '0'),
      page: parseInt(response.headers.get('x-pagination-page') || '0'),
      limit: parseInt(response.headers.get('x-pagination-limit') || '0')
    },
    users
  }));
}
