export const kvPutWeatherData = async (
  key: string,
  value: string,
): Promise<void> => {
  return await WEATHERDATA.put(key, value);
};
