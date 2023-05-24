<template>
  <div class="p-5 my-6 bg-white rounded-lg">
    <h2 class="text-lg font-bold">Log out</h2>
    <p class="text-sm font-light mt-2 px-2">
      Are you sure you want to log out?
    </p>
    <div class="flex justify-start mt-4">
      <button
        class="bg-emerald-500 text-white px-4 py-3 rounded font-medium mr-2"
      >
        Yes
      </button>
      <button class="bg-red-500 text-white px-4 py-3 rounded font-medium">
        No
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
});
</script>
