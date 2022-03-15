interface IAPIResponseSuccess {
  success: true;
  data: any;
}

interface IAPIResponseFailed {
  success: false;
  error_code: string;
}

export type IAPIResponse = IAPIResponseSuccess | IAPIResponseFailed;
