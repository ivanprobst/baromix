<script setup lang="ts">
import TagsListTag from "./TagsListTag.vue";

import { useHomeFormStore } from "../store/rootStore";

const TAGS_LABELS = [
  { id: "sunny", label: "🌞 sunny" },
  { id: "cloudy", label: "☁️ cloudy" },
  { id: "windy", label: "🌬 windy" },
  { id: "tornady", label: "🌪 tornady" },
  { id: "rainy", label: "☔️ rainy" },
  { id: "stormy", label: "⚡️ stormy" },
  { id: "snowy", label: "☃️ snowy" },
];

const homeFormStore = useHomeFormStore();

const tagToggleHandler = (tagId: string) => {
  homeFormStore.toggleWeatherTag(tagId);
};
</script>

<template>
  <ul>
    <li v-for="tag in TAGS_LABELS" :key="tag.id">
      <TagsListTag :tag="tag" @toggle-tag="tagToggleHandler" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 3em;
  padding: 0;
  justify-content: center;
  list-style-type: none;
}
</style>
