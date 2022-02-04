<script setup lang="ts">
import { ref } from "vue";

const selectedDate = ref(new Date());
const selectedTime = ref(new Date());
</script>

<template>
  <h2>Hello friend!</h2>

  <p id="date-text">
    On
    <v-date-picker v-model="selectedDate">
      <template #default="{ inputValue, inputEvents }">
        <input id="input-date" :value="inputValue" v-on="inputEvents" />
      </template>
    </v-date-picker>
    at
    <v-date-picker v-model="selectedTime" mode="time" is24hr>
      <template #default="{ inputValue, inputEvents }">
        <input id="input-time" :value="inputValue" v-on="inputEvents" />
      </template>
    </v-date-picker>
    ,
  </p>

  <p>my barometer indicates <input value="74.6" /> ,</p>

  <p>and the weather looks like it's <input value="sunny, windy, cold" /> .</p>

  <p>(the meteo is saying it's ⛈)</p>

  <button>Send to Baromix</button>
</template>

<style scoped>
h2 {
  font-size: 3rem;
}
main p {
  font-size: 2rem;
}
input {
  padding: 0.5em;
  font-size: 2rem;
  border: none;
  background: Gainsboro;
  text-align: center;
}
#date-text > div {
  display: inline;
}
#input-date {
  width: 5.5em;
}
#input-time {
  width: 3em;
}
</style>
