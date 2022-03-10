import makeServiceWorkerEnv from "service-worker-mock";

import { handleRequest } from "../src/handler";
import * as kv from "../src/fetchKV";

declare let global: any;

describe("Testing workers handlers...", () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv());
    jest.resetModules();
  });

  test("the default routing...", async () => {
    const result = await handleRequest(new Request("/", { method: "GET" }));

    const text = await result.text();

    expect(result.status).toEqual(200);
    expect(text).toEqual("Successful call to url https://www.test.com/");
  });

  test("the POST /weatherData routing...", async () => {
    Object.defineProperty(kv, "kvPutWeatherData", { value: jest.fn() });
    const MOCK_WEATHER_DATA = {
      inputBarometer: "12",
      inputDate: "23",
      inputTime: "24",
      selectedWeatherTags: ["cloudy"],
    };

    const result = await handleRequest(
      new Request("/weatherdata", {
        method: "POST",
        body: JSON.stringify(MOCK_WEATHER_DATA),
      }),
    );
    const {
      success,
      data: { weatherDataSaved },
    } = await result.json();

    expect(result.status).toEqual(200);
    expect(success).toBe(true);
    expect(weatherDataSaved).toHaveProperty("id");
    expect(weatherDataSaved).toMatchObject(MOCK_WEATHER_DATA);
    expect(kv.kvPutWeatherData).toHaveBeenCalled();
    expect(kv.kvPutWeatherData).toHaveBeenCalledWith(
      weatherDataSaved.id,
      JSON.stringify(MOCK_WEATHER_DATA),
    );
  });

  test("the GET /weatherData routing...", async () => {
    Object.defineProperty(kv, "kvGetWeatherData", {
      value: jest.fn(() => Promise.resolve([{ id: "1234" }])),
    });

    const result = await handleRequest(
      new Request("/weatherdata", {
        method: "GET",
      }),
    );
    const {
      success,
      data: { weatherDataList },
    } = await result.json();

    expect(result.status).toEqual(200);
    expect(success).toBe(true);
    expect(Array.isArray(weatherDataList)).toBe(true);
    expect(kv.kvGetWeatherData).toHaveBeenCalled();
    expect(kv.kvGetWeatherData).toHaveBeenCalledWith();
  });
});
