<script setup lang="ts">
import FormInputDate from "./FormInputDate.vue";
import FormInputTime from "./FormInputTime.vue";
</script>

<template>
  <h2>Hello friend!</h2>

  <p>On <FormInputDate /> at <FormInputTime /> ,</p>

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
</style>
