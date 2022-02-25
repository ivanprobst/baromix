export interface WeatherDataType {
  inputDate: string;
  inputTime: string;
  inputBarometer: string;
  selectedWeatherTags: Array<string>;
}

export const PATH_WEATHERDATA = "/weatherdata";

export const ALLOWED_CORS_ORIGINS = new Set([
  "http://localhost:3000",
  "cbb01e03.baromix.pages.dev",
]);
