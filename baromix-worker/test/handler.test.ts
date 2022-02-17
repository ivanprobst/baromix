import { handleRequest } from "../src/handler";
import makeServiceWorkerEnv from "service-worker-mock";

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

    const status = await result.json();

    expect(result.status).toEqual(200);
    expect(status).toEqual({
      success: true,
      weatherDataSaved: MOCK_WEATHER_DATA,
    });
  });
});
