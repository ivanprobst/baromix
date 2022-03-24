import { WEATHER_TAGS_LABELS } from "../utils/constants";

export const convertTagIdsToLabels = (tagIds: Array<string>): Array<string> => {
  return tagIds.map(
    (tagId) =>
      WEATHER_TAGS_LABELS.find(
        (weatherTagLabel) => weatherTagLabel.id === tagId
      )?.label ?? "missing tag"
  );
};
