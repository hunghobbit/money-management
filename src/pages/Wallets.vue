<template>
  <div class="w-1/3 bg-white m-0 mx-auto p-5 mb-2">
    <form @submit.prevent="addWalletDoc" method="post">
      <h4 class="text-center font-bold">Add New Wallet</h4>
      <div class="mb-4 w-full flex justify-start items-center">
        <input v-model="walletName" placeholder="Wallet Name..." class="w-full mr-3 p-2 bg-gray-50" type="text"
          name="walletName" id="wallet-name">
      </div>
      <div class="mb-4 w-full flex justify-start items-center">
        <input v-model="walletNote" placeholder="Note..." class="w-full mr-3 p-2 bg-gray-50" type="text" name="walletNote"
          id="wallet-note">
      </div>
      <div class="mb-4 w-full flex justify-start items-center">
        <input v-model.number="walletBalance" placeholder="" class="w-full mr-3 p-2 bg-gray-50" type="text"
          name="walletBalance" id="wallet-balance">
        <label for="wallet-balance">$</label>
      </div>
      <div class="mb-4">
        <input class="p-4 w-full bg-green-100 cursor-pointer" type="submit" value="Add">
      </div>
    </form>
  </div>


  <div class="w-3/4 bg-slate-50 m-0 mx-auto p-5" v-if="wallets.length > 0">
    <h5 class="text-center font-bold">Your Wallets</h5>
    <ul class="mt-3">
      <Disclosure class="mb-1" :as="'li'" v-slot="{ open }" v-for="wallet in wallets" :key="wallet.id">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>{{ wallet.wName }}</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-8 pt-4 pb-2 text-sm text-gray-500">
          <strong>Note:</strong> <small>{{ wallet.wNote }}</small>
        </DisclosurePanel>
        <DisclosurePanel class="px-8 pt-4 pb-2 text-sm text-gray-500">
          <strong>Balance:</strong> <small>{{ wallet.wBalance }} $</small>
        </DisclosurePanel>
      </Disclosure>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"
import { ChevronUpIcon } from "@heroicons/vue/20/solid"
import useCollection from "../../composables/useCollection";
var walletName = ref("");
var walletNote = ref("");
var walletBalance = ref(0)
let wallets = ref([]);
let walletsColl = null;
const loadData = async () => {
  walletsColl = await useCollection("wallets");
  wallets.value = walletsColl.myCollection;
  console.log(wallets);
};

loadData();

</script>
