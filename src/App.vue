<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { DEFAULT_LAYOUT } from "../constants/index.js";
import PageHeading from "./layouts/partials/PageHeading.vue";

const routes = useRoute();

const layout = computed(
  () => (routes.meta.layout || DEFAULT_LAYOUT) + "-layout"
);
</script>

<template>
  <component :is="layout">
    <template #heading>
      <PageHeading
        :title="routes.meta.title"
        :headingDescription="routes.meta.headingDescription"
      />
    </template>
    <router-view>
    </router-view>
  </component>
</template>
