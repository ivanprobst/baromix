<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({ tag: { type: Object, required: true } });

const tagIsActive = ref(false);

const emit = defineEmits(["toggleTag"]);

const tagClickHandler = () => {
  tagIsActive.value = !tagIsActive.value;
  emit("toggleTag", props.tag.id);
};
</script>

<template>
  <div :class="{ active: tagIsActive }" @click="tagClickHandler">
    {{ tag.label }}
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
  user-select: none;
}
div.active {
  color: white;
  border-color: DimGray;
  background: SteelBlue;
}
</style>
