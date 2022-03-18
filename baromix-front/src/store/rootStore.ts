import { format, parseISO } from "date-fns";
import { defineStore } from "pinia";
import { IWeatherData } from "../models/weatherData";
import { BAROMIX_API_URL, IAPIResponse } from "../utils/constants";

export interface IRootStore {
  weatherDataList: Array<IWeatherData>;
  apiError: string;
  isLoading: boolean;
}

export const useRootStore = defineStore("RootStore", {
  state: () =>
    ({
      weatherDataList: [],
      apiError: "",
      isLoading: false,
    } as IRootStore),

  getters: {
    getChartData: (state) => {
      return state.weatherDataList.map((weatherData) => {
        return {
          name: `${format(
            parseISO(weatherData.inputDate.toString()),
            "d/M"
          )}@${format(parseISO(weatherData.inputTime.toString()), "H:mm")}`,
          barometer: parseFloat(weatherData.inputBarometer),
        };
      });
    },
    getBarometerTrend: (state) => {
      const listLength = state.weatherDataList.length;
      if (listLength === 0) {
        return null;
      }

      return state.weatherDataList[listLength - 1].inputBarometer <
        state.weatherDataList[listLength - 2].inputBarometer
        ? "DOWN"
        : "UP";
    },
  },

  actions: {
    getLatestWeatherData(latestCount = 0) {
      return this.weatherDataList.slice(latestCount && -latestCount).reverse();
    },

    async refreshWeatherDataList() {
      this.isLoading = true;

      const responseRaw = await fetch(BAROMIX_API_URL, {
        method: "GET",
      });

      const responseJSON = (await responseRaw.json()) as IAPIResponse;

      if (responseJSON.success) {
        this.weatherDataList = responseJSON.data.weatherDataList.sort(
          (a: IWeatherData, b: IWeatherData) =>
            a.inputDate > b.inputDate ? 1 : b.inputDate > a.inputDate ? -1 : 0
        );

        this.apiError = "";
      } else {
        this.weatherDataList = [];
        this.apiError = responseJSON.error_code;
      }

      this.isLoading = false;
    },
  },
});

export const useHomeFormStore = defineStore("homeFormStore", {
  state: () =>
    ({
      inputDate: new Date(),
      inputTime: new Date(),
      inputBarometer: "",
      selectedWeatherTags: [],
    } as IWeatherData),

  getters: {
    canSubmitHomeForm() {
      if (
        Number.isNaN(parseInt(this.inputBarometer)) ||
        this.selectedWeatherTags.length === 0
      ) {
        return false;
      }
      return true;
    },
  },

  actions: {
    toggleWeatherTag(tagId: string) {
      // @ts-ignore (state inferred type issue)
      const index = this.selectedWeatherTags.indexOf(tagId);
      if (index === -1) {
        // @ts-ignore (state inferred type issue)
        this.selectedWeatherTags.push(tagId);
      } else {
        this.selectedWeatherTags.splice(index, 1);
      }
    },
  },
});
