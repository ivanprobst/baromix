const sendDefaultResponse = async (request: Request): Promise<Response> => {
  return new Response(`Successful call to url ${request.url}`);
};

const saveWeatherData = async (request: Request): Promise<Response> => {
  const requestData = await request.json();

  // TODO: save the data somewhere

  const responseData = { success: true, weatherDataSaved: requestData };
  return new Response(JSON.stringify(responseData));
};

export async function handleRequest(request: Request): Promise<Response> {
  console.log("request received: ", {
    url: request.url,
    body: request.body,
  });

  const uri = request.url.replace(/^https:\/\/.*?\//gi, "/");

  if (uri === "/weatherdata" && request.method === "POST" && request.body) {
    return saveWeatherData(request);
  }

  return sendDefaultResponse(request);
}
