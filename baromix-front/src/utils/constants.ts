interface IAPIResponseSuccess {
  success: true;
  data: any;
}

interface IAPIResponseFailed {
  success: false;
  error_code: string;
}

export type IAPIResponse = IAPIResponseSuccess | IAPIResponseFailed;

export const WEATHER_TAGS_LABELS = [
  { id: "sunny", label: "🌞 sunny" },
  { id: "cloudy", label: "☁️ cloudy" },
  { id: "windy", label: "💨 windy" },
  { id: "tornady", label: "🌪 tornady" },
  { id: "rainy", label: "☔️ rainy" },
  { id: "stormy", label: "⚡️ stormy" },
  { id: "snowy", label: "☃️ snowy" },
];
