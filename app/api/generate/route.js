export async function POST(request) {
  const { url, shorturl } = await request.json();

  // Logic to store the URL in local storage
  // Note: Local storage is not accessible in server-side code.
  // You may need to handle this differently, such as storing in a file or using a different method.

  return new Response(JSON.stringify({ success: true, shorturl }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}