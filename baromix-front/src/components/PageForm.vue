<script setup lang="ts">
import { useRouter } from "vue-router";
import { createToast } from "mosha-vue-toastify";
import FormInputDate from "./FormInputDate.vue";
import FormInputTime from "./FormInputTime.vue";
import FormInputText from "./FormInputText.vue";
import FormButton from "./FormButton.vue";
import TagsList from "./TagsList.vue";
import WeatherIcon from "./WeatherIcon.vue";

import { useHomeFormStore } from "../store/rootStore";
import { BAROMIX_API_URL, IAPIResponse } from "../utils/constants";

const homeFormStore = useHomeFormStore();
const router = useRouter();

const homeSubmitHandler = async () => {
  const formData = {
    inputBarometer: homeFormStore.inputBarometer,
    inputDate: homeFormStore.inputDate,
    inputTime: homeFormStore.inputTime,
    selectedWeatherTags: homeFormStore.selectedWeatherTags,
  };

  const responseRaw = await fetch(BAROMIX_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseJSON = (await responseRaw.json()) as IAPIResponse;
  if (!responseJSON.success) {
    console.log("failed to POST /weatherdata: ", responseJSON.error_code);
    createToast(
      {
        title: "Error",
        description: `Failed to load weather data (${responseJSON.error_code}). Please refresh the page.`,
      },
      { type: "danger", position: "bottom-center" }
    );
    return;
  }

  router.push("/summary");
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
p {
  font-size: 2rem;
}
</style>
