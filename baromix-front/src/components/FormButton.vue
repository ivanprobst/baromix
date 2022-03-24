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
  background: steelblue;
  color: white;
  cursor: pointer;
  user-select: none;
}
button:disabled {
  border-color: lightslategray;
  background: lightsteelblue;
  cursor: not-allowed;
}
button:active {
  background: rgb(54, 100, 138);
}
</style>
