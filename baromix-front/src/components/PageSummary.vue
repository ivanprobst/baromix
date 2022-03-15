<script setup lang="ts">
import { IAPIResponse } from "../utils/constants";
import { useRootStore } from "../store/rootStore";

const rootStore = useRootStore();

const getAllWeatherData = async () => {
  const responseRaw = await fetch(
    "https://baromix-worker.ivanprobst.workers.dev/weatherdata",
    {
      method: "GET",
    }
  );

  const responseJSON = (await responseRaw.json()) as IAPIResponse;

  if (responseJSON.success) {
    rootStore.weatherDataList = responseJSON.data.weatherDataList;
  } else {
    console.log("failed to GET /weatherdata: ", responseJSON.error_code);
  }
};

getAllWeatherData();
</script>

<template>
  <h2>Latest entries</h2>
  <p>TBD</p>
  >
</template>

<style scoped>
h2 {
  font-size: 3rem;
}
main p {
  font-size: 2rem;
}
</style>
