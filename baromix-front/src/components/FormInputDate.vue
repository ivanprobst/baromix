<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  defaultDate: { type: Date, default: new Date() },
});

const selectedDate = ref(props.defaultDate);
</script>

<template>
  <div id="input-container">
    <v-date-picker v-model="selectedDate">
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
