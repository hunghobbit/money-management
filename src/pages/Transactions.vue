<script setup lang="ts">
import { ref, computed } from "vue"
import useCollection from "~/composables/useCollection"
// import { ChevronUpDownIcon } from "@heroicons/vue/20/solid"
import SimpleModal from "@/components/SimpleModal.vue";
import { serverTimestamp } from "firebase/firestore";
import { ChevronUpIcon } from "@heroicons/vue/20/solid"
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from "@headlessui/vue"

const transactionName = ref("");
const transactionNote = ref("")
const transactionBalance = ref(0)
const isOpenModal = ref(false)
const selectedWallet = ref("");
const selectedCategories = ref("");
const wallets = ref([]);
const transactions = ref([]);
const categories = ref([]);
const walletsColl = null;
const transactionsColl = null;
const categoriesColl = null;
const feedBack = ref(null);



// const catsColl = computed(() => useCollection("categories"));

const openModal = () => {
    isOpenModal.value = true
}

const closeModal = () => {
    isOpenModal.value = false
}


</script>

<template>
    <div>
        <SimpleModal :is-open="isOpenModal" :modal-title="'Transaction'">
            <form @submit.prevent="addTransactionDoc" method="post">
                <h4 class="text-center font-bold">Add New Transaction</h4>
                <div class="mb-4 w-full flex justify-start items-center">
                    <select id="cw" name="currentWallet" v-model="selectedWallet"
                        class="w-full p-3 mt-4 rounded-md text-gray-800">
                        <option :disabled="true" :selected="true">--- Choose your wallet --</option>
                        <option v-for="wallet in wallets" :key="wallet.id" :value="wallet">{{ wallet.wName }}</option>
                    </select>
                </div>
                <div class="mb-4 w-full flex justify-start items-center">
                    <select id="cw" name="currentWallet" v-model="selectedCategories"
                        class="w-full p-3 mt-4 rounded-md text-gray-800">
                        <option :disabled="true" :selected="true">--- Choose your wallet --</option>
                        <option v-for="category in categories" :key="category.id" :value="category">{{ category.categoryName
                        }}</option>
                    </select>
                </div>
                <div class="mb-4 w-full flex justify-start items-center">
                    <input :disabled="selectedWallet === ''" v-model="transactionName" placeholder="Transaction Name..."
                        class="w-full mr-3 p-2 bg-gray-50 disabled:cursor-not-allowed" type="text" name="transactionName"
                        id="transaction-name">
                </div>
                <div class="mb-4 w-full flex justify-start items-center">
                    <input :disabled="selectedWallet === ''" v-model="transactionNote" placeholder="Note..."
                        class="w-full mr-3 p-2 bg-gray-50 disabled:cursor-not-allowed" type="text" name="transactionNote"
                        id="transaction-note">
                </div>
                <div class="mb-4 w-full flex flex-wrap justify-start items-center">
                    <input @change="checkTransactionBalance" :disabled="selectedWallet === ''"
                        v-model.number="transactionBalance" placeholder="$"
                        class="w-full mr-3 p-2 bg-gray-50 disabled:cursor-not-allowed" type="text" name="transactionBalance"
                        id="transaction-balance">
                    <p :hidden="feedBack !== null" class="mt-2 p-2 text-red-600">{{ feedBack }}</p>
                </div>
                <div class="mb-4">
                    <input class="p-4 w-full bg-green-100 cursor-pointer" type="submit" value="Add">
                </div>
            </form>
            <div class="flex flex-row-reverse">
                <button
                    class="bg-red-200 text-red-600 hover:text-white hover:bg-red-600 hover:shadow-md hover:shadow-red-900 p-3 rounded-lg transition-all duration-150"
                    @click="closeModal">Cancel</button>
            </div>
        </SimpleModal>
        <!-- create transactions form -->
        <div class="w-1/3 bg-white m-0 mx-auto p-5 mb-4">
            <button class="rounded-full p-2 bg-gray-300 hover:bg-white hover:shadow-lg" @click="openModal" type="button">Add
                a transaction</button>

        </div>

        <div class="w-3/4 bg-slate-50 m-0 mx-auto p-5" v-if="wallets.length > 0">
            <h5 class="text-center font-bold">Your Transactions</h5>
            <ul class="mt-3">
                <Disclosure class="mb-1" :as="'li'" v-slot="{ open }" v-for="trans in transactions" :key="trans.id">
                    <DisclosureButton
                        class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{{ trans.name }}</span>
                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
                    </DisclosureButton>
                    <DisclosurePanel class="px-8 pt-4 pb-2 text-sm text-gray-500">
                        <strong>Note:</strong> <small>{{ trans.note }}</small>
                    </DisclosurePanel>
                    <DisclosurePanel class="px-8 pt-4 pb-2 text-sm text-gray-500">
                        <strong>Balance:</strong> <small>{{ trans.balance }} $</small>
                    </DisclosurePanel>
                    <DisclosurePanel class="px-8 pt-4 pb-2 text-sm text-gray-500">
                        <strong>Wallet:</strong> <small>{{ wallets.find(data => data.id === trans.walletId).wName }}</small>
                    </DisclosurePanel>
            </Disclosure>
        </ul>
    </div>
</div>
</template>
