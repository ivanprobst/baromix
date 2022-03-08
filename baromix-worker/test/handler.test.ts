import makeServiceWorkerEnv from "service-worker-mock";

import { handleRequest } from "../src/handler";
import * as kv from "../src/kv";

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

  test("the form data processing routing...", async () => {
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
    const { success, weatherDataSaved } = await result.json();

    expect(result.status).toEqual(200);
    expect(success).toStrictEqual(true);
    expect(weatherDataSaved).toHaveProperty("id");
    expect(weatherDataSaved).toMatchObject(MOCK_WEATHER_DATA);
    expect(kv.kvPutWeatherData).toHaveBeenCalled();
    expect(kv.kvPutWeatherData).toHaveBeenCalledWith(
      weatherDataSaved.id,
      JSON.stringify(MOCK_WEATHER_DATA),
    );
  });
});
