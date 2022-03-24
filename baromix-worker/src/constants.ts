export const PATH_WEATHERDATA = "/weatherdata";

export interface IWeatherData {
  id: string;
  inputDate: string;
  inputTime: string;
  inputBarometer: string;
  selectedWeatherTags: Array<string>;
}

interface IAPIResponseSuccess {
  success: true;
  data: any;
}

interface IAPIResponseFailed {
  success: false;
  error_code: string;
}

export type IAPIResponse = IAPIResponseSuccess | IAPIResponseFailed;
