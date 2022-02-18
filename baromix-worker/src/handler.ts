import { WeatherDataType, PATH_WEATHERDATA } from "./constants";

const sendDefaultResponse = async (request: Request): Promise<Response> => {
  return new Response(`Successful call to url ${request.url}`);
};

const saveWeatherData = async (request: Request): Promise<Response> => {
  const requestData: WeatherDataType = await request.json();

  await WEATHERDATA.put(
    `${requestData.inputDate}${requestData.inputTime}`,
    JSON.stringify(requestData),
  );

  const responseData = { success: true, weatherDataSaved: requestData };
  return new Response(JSON.stringify(responseData));
};

export async function handleRequest(request: Request): Promise<Response> {
  console.log("request received: ", {
    url: request.url,
    body: request.body,
  });

  const uri = request.url.replace(/^https:\/\/.*?\//gi, "/");

  if (uri === PATH_WEATHERDATA && request.method === "POST" && request.body) {
    return saveWeatherData(request);
  }

  return sendDefaultResponse(request);
}
