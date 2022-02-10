<script setup lang="ts">
import { useHomeFormStore } from "../store/rootStore";

const homeFormStore = useHomeFormStore();

const props = defineProps({
  placeholder: { type: String, default: "" },
});
</script>

<template>
  <div id="input-container">
    <input
      v-model="homeFormStore.inputBarometer"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style scoped>
#input-container,
#input-container > div {
  display: inline;
}
input {
  width: 2.5em;
}
</style>
