<script setup lang="ts">
import { ref } from "vue";
import IconLoading from "../assets/IconLoading.vue";
import { OPENWEATHERMAP_API_KEY } from "../store/constants";

const props = defineProps({ location: { type: String, required: true } });

const iconUrl = ref("");

const fetchData = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&APPID=${OPENWEATHERMAP_API_KEY}`
  );
  const responseJson = await response.json();

  iconUrl.value = `http://openweathermap.org/img/w/${responseJson.weather[0].icon}.png`;
};

fetchData();
</script>

<template>
  <span>
    <img v-if="iconUrl" :src="iconUrl" />
    <IconLoading v-else />
  </span>
</template>

<style scoped>
img {
  width: 0.8em;
}
</style>
