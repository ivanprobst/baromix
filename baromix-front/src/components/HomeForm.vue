<script setup lang="ts">
import FormInputDate from "./FormInputDate.vue";
import FormInputTime from "./FormInputTime.vue";
import FormInputText from "./FormInputText.vue";
import FormButton from "./FormButton.vue";
import TagsList from "./TagsList.vue";
import WeatherIcon from "./WeatherIcon.vue";

import { useHomeFormStore } from "../store/rootStore";

const homeFormStore = useHomeFormStore();

const homeSubmitHandler = () => {
  console.log("click:", {
    inputBarometer: homeFormStore.inputBarometer,
    inputDate: homeFormStore.inputDate,
    inputTime: homeFormStore.inputTime,
    selectedWeatherTags: homeFormStore.selectedWeatherTags,
  });
  // TODO: send this data somewhere!!!
};
</script>

<template>
  <h2>Hello friend!</h2>

  <p>On <FormInputDate /> at <FormInputTime /> ,</p>

  <p>my barometer indicates <FormInputText placeholder="74.6" /> ,</p>

  <p>and the weather looks like it's</p>

  <TagsList />

  <FormButton
    :disabled="!homeFormStore.canSubmitHomeForm"
    @click="homeSubmitHandler"
  >
    Send to Baromix
  </FormButton>

  <p>(the meteo is saying it's <WeatherIcon location="Bottens,ch" />)</p>
</template>

<style scoped>
h2 {
  font-size: 3rem;
}
main p {
  font-size: 2rem;
}
</style>
