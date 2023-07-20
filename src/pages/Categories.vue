<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 gap-1 justify-between items-center">
        <button v-for="cat in categories" :key="cat.id" class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-lg border-l-4 border-l-slate-400">
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ cat.categoryName }}</h2>
            <p class="leading-relaxed text-base">
              ... description ...
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// import useReadFireStore from "../../composables/useReadFireStore";
import useCollection from "../../composables/useCollection";

let categories = ref([])
const props = defineProps({
  title: String,
});
let catsColl = null;

const loadData = async () => {
  catsColl = await useCollection("categories");
  categories.value = catsColl.myCollection; 
};
loadData()
</script>

