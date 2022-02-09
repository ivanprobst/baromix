<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  defaultText: { type: String, default: "" },
  placeholder: { type: String, default: "" },
});

const text = ref(props.defaultText);
</script>

<template>
  <div id="input-container">
    <input :value="text" :placeholder="props.placeholder" />
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
