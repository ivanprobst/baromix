<script setup lang="ts">
const props = defineProps({ disabled: { type: Boolean, default: false } });

const emit = defineEmits(["click"]);
</script>

<template>
  <button :disabled="props.disabled" @click="() => emit('click')">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 0.5em 1em;
  font-size: 2rem;
  border-radius: 0.3em;
  border: 1px solid darkslategray;
  background: forestgreen;
  color: white;
  cursor: pointer;
  user-select: none;
}
button:disabled {
  border-color: lightslategray;
  background: darkseagreen;
  cursor: not-allowed;
}
button:active {
  background: darkgreen;
}
</style>
