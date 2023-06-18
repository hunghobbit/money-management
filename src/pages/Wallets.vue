<template>
  <SimpleModal :show="isOpen">
    <DialogTitle class="text-2xl text-center text-slate-500 mb-8 font-bold">
      ADD WALLETS
    </DialogTitle>
    <div class="mt-4">
      <p class="text-center text-gray-500">Add your wallet to track your</p>
    </div>
    <div class="mt-4 flex justify-start items-baseline gap-2">
      <button
        class="p-3 m-0 rounded-sm bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
      >
        Save
      </button>
    
      <button
        @click="closeModal"
        class="p-3 m-0 rounded-sm bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-900 transition-all duration-200"
      >
        Close
      </button>
    </div>
  </SimpleModal>
  <div class="rounded-xl shadow-md bg-white p-5 mt-16">
    <button
      @click="openModal"
      class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
    >
      Add Wallet
    </button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import useCollection from "../../composables/useCollections";
import {
  
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import SimpleModal from "../components/SimpleModal.vue";
const categories = ref([]);
const isOpen = ref(false);
const wallets = reactive([]);
const { collections, error, getAll } = useCollection("categories");

try {
  getAll();
  categories.value = collections.value;
} catch (err) {
  console.log(err);
}

console.log(collections.value);
function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}
</script>
