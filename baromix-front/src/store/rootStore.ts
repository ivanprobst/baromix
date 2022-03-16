import { defineStore } from "pinia";
import { IWeatherData } from "../models/weatherData";

export interface IRootStore {
  weatherDataList: Array<IWeatherData>;
}

export const useRootStore = defineStore("RootStore", {
  state: () =>
    ({
      weatherDataList: [],
    } as IRootStore),
});

export const useHomeFormStore = defineStore("homeFormStore", {
  state: () =>
    ({
      inputDate: "",
      inputTime: "",
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
