<script setup lang="ts">
import { format, parseISO } from "date-fns";
import { useRootStore } from "../store/rootStore";
import WeatherDataCard from "./WeatherDataCard.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import IconLoading from "../assets/IconLoading.vue";
import { convertTagIdsToLabels } from "../utils/utils";
import { Chart, Grid, Line } from "vue3-charts";

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
  <h2>Summary</h2>

  <IconLoading v-if="rootStore.isLoading" />

  <section v-if="!rootStore.isLoading">
    <div id="trend-weatherdata">
      <span v-if="rootStore.getBarometerTrend === 'DOWN'">⛈ ⬇️ going ⬇️ ⛈</span>
      <span v-if="rootStore.getBarometerTrend === 'UP'">☀️ ⬆️ going ⬆️ ☀️</span>
    </div>

    <h3>Last 7 days</h3>

    <ul id="latest-weatherdata">
      <li v-for="weatherData in rootStore.getLatestWeatherData(7)">
        <WeatherDataCard :weather-data="weatherData" />
      </li>
    </ul>

    <h3>Barotrends</h3>
    <div id="chart-weatherdata">
      <Chart
        :size="{ width: 800, height: 400 }"
        :data="rootStore.getChartData"
        direction="horizontal"
      >
        <template #layers>
          <Grid strokeDasharray="2,2" />
          <Line
            :dataKeys="['name', 'barometer']"
            type="monotone"
            :lineStyle="{
              stroke: 'steelblue',
            }"
          />
        </template>
      </Chart>
    </div>

    <h3>All weather data</h3>
    <ul id="all-weatherdata">
      <li class="header">
        <div>Date</div>
        <div>Value</div>
        <div>Weather</div>
      </li>
      <li v-for="weatherData in rootStore.getLatestWeatherData()">
        <div>
          {{
            format(parseISO(weatherData.inputDate.toString()), "MMM d, yyyy")
          }}
          {{ format(parseISO(weatherData.inputTime.toString()), "@H:mm") }}
        </div>
        <div>{{ weatherData.inputBarometer }}</div>
        <div>
          {{ convertTagIdsToLabels(weatherData.selectedWeatherTags).join(" ") }}
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
div#trend-weatherdata {
  margin: 1.2em auto;
  font-size: 2rem;
}

ul#latest-weatherdata {
  margin-bottom: 3em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 10px;
}

div#chart-weatherdata {
  margin-bottom: 3em;
}

ul#all-weatherdata {
  margin: auto;
  max-width: 600px;
}
ul#all-weatherdata li {
  padding: 0.5em 0;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  column-gap: 10px;
}
li.header {
  font-weight: bold;
  border-bottom: 1px solid grey;
}
</style>
