<template>
  <div class="wrapper">
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


  <div id="wallet-actions" class="w-3/4 bg-slate-50 m-0 mx-auto p-5 max-sm:w-full">
    <button type="button" disabled><SolidWallet /></button>
    <button @click="toggleModal" type="button"><OutlineNewWallet :w="24" :h="24" /></button>
  </div>

  <div class="w-3/4 bg-slate-50 m-0 mx-auto p-5 max-sm:w-full" v-if="wallets.length > 0">
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"
import { ChevronUpIcon } from "@heroicons/vue/20/solid"
import SimpleModal from '@/components/SimpleModal.vue';
import SolidWallet from '@/components/Icons/SolidWallet.vue';
import OutlineNewWallet from '@/components/Icons/OutlineNewWallet.vue'

import { useWalletsStore } from "@/stores/wallets";


var walletName = ref("");
var walletNote = ref("");
var walletBalance = ref(0)
const walletStore = useWalletsStore();

const { error, wallets, addWallet, getWallets  } = walletStore;


let isOpen = ref(false);
let toggleModal = () => {
  isOpen.value = !isOpen.value
}

const loadData = async () => {
  await getWallets();
  console.log(wallets);
  
};


const addWalletDoc = async () => {
  const res:{success: boolean, message: string} = await addWallet(walletName.value, walletNote.value, walletBalance.value);
  
  if(res){
    console.log(res);
    isOpen.value = false;
    alert(res.message);
    self.location.reload();  
  }
}

loadData();
</script>

<style scoped>
#wallet-actions{
  display: inline-flex;
  gap: 10px;
}

#wallet-actions > button {
  transition: all 0.5s ease;
  background-color: inherit;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px white;
}
#wallet-actions > button:first-child{
  background-color: rgb(217, 215, 215);
}
#wallet-actions > button:not(:first-child):hover{
  background-color: white;
  box-shadow: 1px 2px lightgray;
}
</style>