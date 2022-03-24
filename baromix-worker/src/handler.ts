import { v4 as uuidv4 } from "uuid";

import { IAPIResponse, IWeatherData, PATH_WEATHERDATA } from "./constants";
import { kvGetWeatherData, kvPutWeatherData } from "./fetchKV";

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

const getWeatherData = async (request: Request): Promise<Response> => {
  let responseData: IAPIResponse = {
    success: false,
    error_code: "unknown_error",
  };
  try {
    const weatherDataList = await kvGetWeatherData();

    responseData = {
      success: true,
      data: { weatherDataList },
    };
  } catch (e) {
    console.log(e);
  }

  return new Response(JSON.stringify(responseData), {
    headers: buildCORSHeader(request),
  });
};

const saveWeatherData = async (request: Request): Promise<Response> => {
  const requestData: Omit<IWeatherData, "id"> = await request.json();

  const weatherDataId = uuidv4();
  await kvPutWeatherData(weatherDataId, JSON.stringify(requestData));

  const responseData: IAPIResponse = {
    success: true,
    data: { weatherDataSaved: { id: weatherDataId, ...requestData } },
  };

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
  } else if (
    uri === PATH_WEATHERDATA &&
    request.method === "POST" &&
    request.body
  ) {
    return saveWeatherData(request);
  } else if (uri === PATH_WEATHERDATA && request.method === "GET") {
    return getWeatherData(request);
  }

  return sendDefaultResponse(request);
}
