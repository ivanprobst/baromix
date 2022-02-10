import { defineStore } from "pinia";

export const useHomeFormStore = defineStore("homeFormStore", {
  state: () => ({
    inputDate: new Date(),
    inputTime: new Date(),
    inputBarometer: "",
    selectedWeatherTags: [],
  }),

  getters: {
    canSubmitHomeForm() {
      if (Number.isNaN(parseInt(this.inputBarometer))) {
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
