<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Add a new wallet
              </DialogTitle>
              <div class="mt-2">
                <form
                  class="p-5 grid grid-cols-2 gap-y-4"
                  @submit="&quot;#&quot;;"
                  method="post"
                >
                  <!-- Choose wallet Category -->
                  <Listbox v-model="category" class="w-1/3 container flex justify-between">
                    <ListboxLabel class="text-md text-gray-600 font-semibold">
                      Choose Category
                    </ListboxLabel>

                    <ListboxButton">
                      <span class="block truncate">{{ category }}</span>
                    </ListboxButton>
                    
                    <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      <ListboxOption v-for="item in categoriesList" :key="item" :value="item">
                        {{ items }}
                      </ListboxOption>
                    </ListboxOptions>
                  </Listbox>
                </form>
              </div>

              <div class="mt-4">
                <button type="button" @click="closeModal" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div class="my-6 p-6 bg-white rounded-md">
    <div class="w-full">
      <button
        type="button"
        @click="openModal"
        class="w-full sm:w-fit bg-green-500 text-white p-6 my-2 mx-5 rounded-2xl text-lg font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="inline w-6 h-6 active:bg-green-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        Add a wallets
      </button>
      <ul class="grid grid-cols-4 gap-2">
        <li
          class="p-4 rounded-md bg-gray-100"
          v-for="wallet in result"
          :key="wallet.id"
        >
          <h2>{{ wallet.name }}</h2>
          <p>{{ wallet.balance }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CATEGORIES } from '../../utils/factory.js'


const categoriesList = reactive(CATEGORIES);
const isOpen = ref(true);
const category = ref("");
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
