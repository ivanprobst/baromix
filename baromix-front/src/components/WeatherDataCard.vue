<script setup lang="ts">
import { format, parseISO } from "date-fns";
import { IWeatherData } from "../models/weatherData";
import { convertTagIdsToLabels } from "../utils/utils";

const props = defineProps<{ weatherData: IWeatherData }>();
</script>

<template>
  <div>
    <h6>
      {{ weatherData.inputBarometer }}
    </h6>

    <ul>
      <li
        v-for="weatherTagLabel in convertTagIdsToLabels(
          weatherData.selectedWeatherTags
        )"
      >
        {{ weatherTagLabel }}
      </li>
    </ul>

    <p>
      {{ format(parseISO(weatherData.inputDate), "MMM d, yyyy") }}
      {{ format(parseISO(weatherData.inputTime), "@H:mm") }}
    </p>
  </div>
</template>

<style scoped>
div {
  padding: 0.8em;
  height: calc(100% - 1.6em);
  border-radius: 0.3em;
  border: 1px solid darkslategray;
  background: steelblue;
  color: white;
}

h6 {
  margin: auto auto 0.5em auto;
  width: 80px;
  line-height: 80px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  border: 1px solid darkslategray;
  background: white;
  color: steelblue;
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px 5px;
  font-size: 0.8rem;
}

p {
  margin-bottom: 0;
  color: darkslategray;
  font-size: 0.8rem;
  font-style: italic;
}
</style>
