<script setup lang="ts">
import { ref, onDeactivated } from 'vue'
import AppHeader from "./partials/Header.vue";
import AppFooter from "./partials/Footer.vue";
import SimpleLoader from "@/components/SimpleLoader.vue";
const dataLoading = ref(true)
setTimeout(() => {
  dataLoading.value = false;
}, 10000);
</script>

<template>
  <AppHeader />

  <main>
    <div class="main-wrapper py-12 px-3 bg-gray-100 min-h-screen">
      <slot name="heading" />


      <div v-if="dataLoading" class="mt-10">
        <SimpleLoader></SimpleLoader>
      </div>
      <div v-else class="mt-10">
        <Transition
          enter-active-class="transition-all duration-1000 ease-in"
          enter-from-class="transform translate-y-1/4 opacity-10"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition-all duration-1000 ease-out"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-1/4 opacity-10"
        appear
          >
          <slot />
        </Transition>
      </div>
    </div>
  </main>
  <AppFooter />
</template>