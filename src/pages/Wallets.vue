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
              class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Add Wallet
              </DialogTitle>
              <div class="mt-2">
                <form class="p-3 my-3 grid grid-cols-1 gap-y-3" method="post">
                  <div class="w-1/2">
                    <Listbox v-model="category">
                    <ListboxButton class="text-gray-800 inline-flex justify-between items-center p-2 focus:outline-offset-2 focus:outline-lime-400">
                    {{
                      category
                    }}
                    <ChevronDownIcon
                      class="-mr-1 ml-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </ListboxButton>
                    <ListboxOptions
                      class="p-2 max-h-60 overflow-auto"
                    >
                      <ListboxOption
                        class="text-gray-800 hover:bg-lime-400 hover:text-white hover:font-semibold hover:cursor-pointer"
                        v-for="cat in categories"
                        :key="cat.id"
                        :value="cat.category_name"
                      >
                        {{ cat.category_name }}
                      </ListboxOption>
                    </ListboxOptions>
                  </Listbox>
                  </div>
                </form>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
import { CATEGORIES } from "../../utils/factory.js";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {
  ChevronDownIcon
} from '@heroicons/vue/20/solid'

const isOpen = ref(false);
const categories = reactive(CATEGORIES);
const category = ref(categories[0].category_name);
console.log(categories);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

</script>
