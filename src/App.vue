<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { DEFAULT_LAYOUT } from '../constants/index.js'; 

const routes = useRoute();

const layout = computed(() => (routes.meta.layout || DEFAULT_LAYOUT) + '-layout');
let authenticated = ref(false);
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
