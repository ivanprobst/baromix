<script setup lang="ts">
import TagsListTag from "./TagsListTag.vue";
import { useHomeFormStore } from "../store/rootStore";
import { WEATHER_TAGS_LABELS } from "../utils/constants";

const homeFormStore = useHomeFormStore();

const tagToggleHandler = (tagId: string) => {
  homeFormStore.toggleWeatherTag(tagId);
};
</script>

<template>
  <ul>
    <li v-for="tag in WEATHER_TAGS_LABELS" :key="tag.id">
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
