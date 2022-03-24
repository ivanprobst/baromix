<script setup lang="ts">
import { useHomeFormStore } from "../store/rootStore";

const homeFormStore = useHomeFormStore();
</script>

<template>
  <div id="input-container">
    <v-date-picker v-model="homeFormStore.inputDate">
      <template #default="{ inputValue, inputEvents }">
        <input :value="inputValue" v-on="inputEvents" />
      </template>
    </v-date-picker>
  </div>
</template>

<style scoped>
#input-container,
#input-container > div {
  display: inline;
}
input {
  width: 5.5em;
}
</style>
