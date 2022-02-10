<script setup lang="ts">
import TagsListTag from "./TagsListTag.vue";

const TAGS_LABELS = {
  sunny: "🌞 sunny",
  cloudy: "☁️ cloudy",
  windy: "🌬 windy",
  tornady: "🌪 tornady",
  rainy: "☔️ rainy",
  stormy: "⚡️ stormy",
  snowy: "☃️ snowy",
};
</script>

<template>
  <ul>
    <li v-for="tag in TAGS_LABELS" :key="tag">
      <TagsListTag :tag-label="tag" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  justify-content: center;
  list-style-type: none;
}
</style>
