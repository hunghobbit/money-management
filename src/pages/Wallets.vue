<script setup></script>

<template>
  <!-- write about money transaction planning website applications -->
  <div class="my-6 p-6 bg-white rounded-md">
    <h1 class="text-lg uppercase text-green-500 font-bold p-6 my-4">Wallets</h1>
    <div class="w-full">
      <button
        @click="showAddWalletModal"
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
