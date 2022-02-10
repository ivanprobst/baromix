<script setup lang="ts">
const emit = defineEmits(["click"]);
</script>

<template>
  <button @click="() => emit('click')">
    <slot />
  </button>
</template>

<style scoped></style>
