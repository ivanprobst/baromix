import { IWeatherData } from "./constants";

export const kvPutWeatherData = async (
  key: string,
  value: string,
): Promise<void> => {
  return WEATHERDATA.put(key, value);
};

export const kvGetWeatherData = async (
  key?: string,
): Promise<IWeatherData | Array<IWeatherData | { id: string }> | null> => {
  if (key) {
    const value = await WEATHERDATA.get(key);
    return value && JSON.parse(value);
  } else {
    const keyList = await WEATHERDATA.list();

    const valueList = await Promise.all(
      keyList.keys.map((key) => WEATHERDATA.get(key.name)),
    );

    return valueList.map((value, index) => {
      if (!value) {
        return { id: keyList.keys[index].name };
      } else {
        return { id: keyList.keys[index].name, ...JSON.parse(value) };
      }
    });
  }
};
