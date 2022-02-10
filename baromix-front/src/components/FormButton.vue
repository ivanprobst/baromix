<script setup lang="ts">
const props = defineProps({ disabled: { type: Boolean, default: false } });

const emit = defineEmits(["click"]);
</script>

<template>
  <button :disabled="props.disabled" @click="() => emit('click')">
    <slot />
  </button>
</template>

<style scoped></style>
