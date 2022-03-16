<script setup lang="ts">
import { useRootStore } from "../store/rootStore";
import WeatherDataCard from "./WeatherDataCard.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import IconLoading from "../assets/IconLoading.vue";

const rootStore = useRootStore();

const getAllWeatherData = async () => {
  await rootStore.refreshWeatherDataList();

  if (rootStore.weatherDataList.length === 0) {
    console.log("failed to GET /weatherdata: ", rootStore.apiError);
    createToast(
      {
        title: "Error",
        description: `Failed to load weather data (${rootStore.apiError}). Please refresh the page.`,
      },
      { type: "danger", position: "bottom-center" }
    );
    return;
  }
};

getAllWeatherData();
</script>

<template>
  <h2>Weather data</h2>

  <h3>Last 7 days</h3>
  <IconLoading v-if="rootStore.isLoading" />
  <ul>
    <li v-for="weatherData in rootStore.getLatest7WeatherData">
      <WeatherDataCard :weather-data="weatherData" />
    </li>
  </ul>
</template>

<style scoped>
h2 {
  font-size: 3rem;
}
main p {
  font-size: 2rem;
}
ul {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 10px;
}
</style>
