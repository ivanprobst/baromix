<script setup lang="ts">
import { ref } from "vue";

defineProps({ tagLabel: { type: String, required: true } });

const tagIsActive = ref(false);
</script>

<template>
  <div
    :class="{ active: tagIsActive }"
    @click="() => (tagIsActive = !tagIsActive)"
  >
    {{ tagLabel }}
  </div>
</template>

<style scoped>
div {
  margin: 0.5em;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 0.3em;
  border: 1px solid moccasin;
  background: OldLace;
  cursor: pointer;
}
div.active {
  color: white;
  border-color: DimGray;
  background: SteelBlue;
}
</style>
