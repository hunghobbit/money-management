<script setup>
import AppHeader from "./partials/Header.vue";
import AppFooter from "./partials/Footer.vue";
</script>

<template>
  <AppHeader />
  <main>
    <div class="main-wrapper py-12 px-3 bg-gray-100 min-h-screen">
      <slot name="heading"/>

      <div class="mt-10">
        <slot/>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
