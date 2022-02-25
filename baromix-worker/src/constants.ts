export interface WeatherDataType {
  inputDate: string;
  inputTime: string;
  inputBarometer: string;
  selectedWeatherTags: Array<string>;
}

export const PATH_WEATHERDATA = "/weatherdata";
