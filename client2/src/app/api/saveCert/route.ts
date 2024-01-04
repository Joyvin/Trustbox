interface MyRequest extends Request {
  json: () => Promise<{ uid: string; jsonData: string }>;
}

export async function POST(request: MyRequest, response: Response) {
  const { uid, jsonData } = await request.json();

  console.log(uid, jsonData);

  return new Response("File received successfully", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
