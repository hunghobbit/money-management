<template>
  <SimpleModal modal-title="Wallet - New" :is-open="isOpen">
    <div class=" bg-white m-0 mx-auto p-5 mb-2 max-sm:w-full">
      <form @submit.prevent="addWalletDoc" method="post">
        <h4 class="text-center font-bold mb-4">Add New Wallet</h4>
        <div class="mb-4 w-full flex justify-start items-center">
          <input v-model="walletName" placeholder="Wallet Name..." class="w-full mr-3 p-2 bg-gray-50" type="text"
            name="walletName" id="wallet-name">
        </div>
        <div class="mb-4 w-full flex justify-start items-center">
          <input v-model="walletNote" placeholder="Note..." class="w-full mr-3 p-2 bg-gray-50" type="text"
            name="walletNote" id="wallet-note">
        </div>
        <div class="mb-4 w-full flex justify-start items-center">
          <input v-model.number="walletBalance" placeholder="0" class="w-full mr-3 p-2 bg-gray-50" type="text"
            name="walletBalance" id="wallet-balance">
          <label for="wallet-balance">$</label>
        </div>
        <div class="mb-4">
          <button type="submit" class="w-full py-4 rounded-md text-violet-900 text-xl font-semibold bg-violet-300 hover:shadow-sm hover:shadow-violet-800 hover:bg-white hover:transition-all hover:duration-100">Add</button>
        </div>
      </form>
    </div>
    <hr class="divide-y-2 divide-emerald-400">
    <div class="flex flex-row-reverse justify-start mt-3">
      <button class="py-3 px-4 bg-slate-200 rounded-lg hover:bg-white hover:shadow-sm hover:shadow-black" @click="isOpen = false" type="button">Close</button>
    </div>
  </SimpleModal>


  <div class="w-3/4 bg-slate-50 m-0 mx-auto p-5 max-sm:w-full">
    <button @click="toggleModal" type="button">Add New Wallet</button>
  </div>
  <div class="w-3/4 bg-slate-50 m-0 mx-auto p-5 max-sm:w-full" v-if="wallets.length === 0">
    <div class="mt-2 mb-4 mx-auto text-xl font-light text-gray-500">You have not any wallet, yet! Press above button to
      create a new!</div>
  </div>
  <div class="w-3/4 bg-slate-50 m-0 mx-auto p-5 max-sm:w-full" v-else-if="wallets.length > 0">
    <h5 class="text-center font-bold">Your Wallets</h5>
    <ul class="mt-3">
      <Disclosure class="mb-1" :as="'li'" v-slot="{ open }" v-for="wallet in wallets" :key="wallet.id">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <strong>{{ wallet.wName }}</strong>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="max-sm:text-lg px-8 pt-4 pb-2 text-sm text-gray-500">
          <div class="inline font-semibold">Note:</div> <span>{{ wallet.wNote }}</span>
        </DisclosurePanel>
        <DisclosurePanel class="max-sm:text-lg px-8 pt-4 pb-2 text-sm text-gray-500">
          <div class="inline font-semibold">Balance:</div> <span>{{ wallet.wBalance }} $</span>
        </DisclosurePanel>
      </Disclosure>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"
import { ChevronUpIcon } from "@heroicons/vue/20/solid"
import useCollection from "../../composables/useCollection";
import SimpleModal from '@/components/SimpleModal.vue';


var walletName = ref("");
var walletNote = ref("");
var walletBalance = ref(0)
let wallets = ref([]);
let walletsColl = null;

let isOpen = ref(false);
let toggleModal = () => {
  isOpen.value = !isOpen.value
}

const loadData = async () => {
  walletsColl = await useCollection("wallets");
  wallets.value = walletsColl.myCollection;

  console.log(wallets);
};

loadData();

const addWalletDoc = (name, note, balance) => {

}

</script>
