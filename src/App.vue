<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { DEFAULT_LAYOUT } from "../constants/index.js";
import PageHeading from "./layouts/partials/PageHeading.vue";
const routes = useRoute();
const layout = computed(
  () => (routes.meta.layout || DEFAULT_LAYOUT) + "-layout"
);

</script>

<template>
  <!-- <div
    v-if="!auth.currentUser"
    class="flex justify-center items-center h-screen w-screen z-10"
  >
    <div
      style="border-top-color: transparent"
      class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
    ></div>
  </div> -->
  <component :is="layout">
    <template #heading>
      <PageHeading
        :title="routes.meta.title"
        :headingDescription="routes.meta.headingDescription"
      />
    </template>
    <router-view> </router-view>
  </component>
</template>
