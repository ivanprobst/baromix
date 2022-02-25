import { WeatherDataType, PATH_WEATHERDATA } from "./constants";

const buildCORSHeader = (request: Request) => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": request.headers.get(
      "Access-Control-Request-Headers",
    ) as string,
  };
};

const sendCORS = async (request: Request): Promise<Response> => {
  if (
    request.headers.get("Access-Control-Request-Headers") === null ||
    request.headers.get("Origin") === null
  ) {
    return new Response(null);
  }

  return new Response(null, { headers: buildCORSHeader(request) });
};

const saveWeatherData = async (request: Request): Promise<Response> => {
  const requestData: WeatherDataType = await request.json();

  await WEATHERDATA.put(
    `${requestData.inputDate}${requestData.inputTime}`,
    JSON.stringify(requestData),
  );

  const responseData = { success: true, weatherDataSaved: requestData };
  return new Response(JSON.stringify(responseData), {
    headers: buildCORSHeader(request),
  });
};

const sendDefaultResponse = async (request: Request): Promise<Response> => {
  return new Response(`Successful call to url ${request.url}`);
};

export async function handleRequest(request: Request): Promise<Response> {
  console.log("request received: ", {
    method: request.method,
    url: request.url,
    body: request.body,
  });

  const uri = request.url.replace(/^https:\/\/.*?\//gi, "/");

  if (request.method === "OPTIONS") {
    return sendCORS(request);
  }
  if (uri === PATH_WEATHERDATA && request.method === "POST" && request.body) {
    return saveWeatherData(request);
  }

  return sendDefaultResponse(request);
}
