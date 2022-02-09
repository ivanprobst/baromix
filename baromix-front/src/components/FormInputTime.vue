<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  defaultTime: { type: Date, default: new Date() },
});

const selectedTime = ref(props.defaultTime);
</script>

<template>
  <div id="input-container">
    <v-date-picker v-model="selectedTime" mode="time" is24hr>
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
  width: 3em;
}
</style>
