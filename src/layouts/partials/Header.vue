<script setup>
import SimpleDropdown from "../../components/SimpleDropdown.vue";
import { ref } from "vue";
defineProps(["authenticated", "userInfo"]);

initTE({Dropdown, Ripple});
const toggle = ref(false);
</script>
<template>
  <header class="flex justify-between items-center sm:bg-emerald-200">
    <div class="sm:hidden sm:bg-white sticky flex justify-between items-center">
      <button @click="toggle = !toggle" class="p-2 m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div
      aria-modal="true"
      aria-busy="true"
      :class="{ 'translate-x-0': toggle, '-translate-x-full': !toggle }"
      class="sm:hidden pt-6 px-8 bg-white w-screen rounded-sm border-spacing-1 absolute top-10 min-h-screen transition-transform"
    >
      <router-link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558"
          alt="logo"
          class="inline ml-3 w-8 h-8"
        />
        <span class="my-6 text-emerald-500 font-bold"> Simple Money </span>
      </router-link>

      <ul class="w-full mt-6 flex flex-col gap-3">
        <li>
          <router-link
            class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200"
            to="/wallets"
          >
            Wallets
          </router-link>
        </li>
        <li>
          <router-link
            class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200"
            to="/transactions"
          >
            Transactions
          </router-link>
        </li>
      </ul>
    </div>

    <div
      class="w-full max-sm:hidden flex justify-between items-center sm:bg-emerald-200"
    >
      <a href="/">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558"
            alt="logo"
            class="ml-3 w-8 h-8"
          />
        </div>
      </a>

      <ul class="nav flex flex-wrap justify-start items-center">
        <li>
          <router-link
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/wallets"
            >Wallets</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/transactions"
            >Transactions</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/categories"
            >Categories</router-link
          >
        </li>
        <li>
          <router-link
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/contacts"
            >Contacts</router-link
          >
        </li>
      </ul>

      <ul class="flex flex-wrap justify-start items-center gap-x-3 mr-3">
        <li v-if="authenticated">
          <SimpleDropdown
            :title="userInfo.displayName"
            :dataList="[
              { displayContent: 'Profile' },
              { displayContent: 'Logout' },
            ]"
          />
        </li>
        <li v-if="!authenticated">
          <button
            @click="$router.push('login')"
            class="text-sm py-2 px-3 bg-slate-300 hover:bg-slate-200 text-green-500 font-medium cursor-pointer outline-double outline-2 outline-green-300"
          >
            Login
          </button>
        </li>
        <li v-if="!authenticated">
          <button
            @click="$router.push('register')"
            class="text-sm py-2 px-3 bg-slate-300 hover:bg-slate-200 text-red-500 cursor-pointer outline-double outline-2 outline-red-300"
          >
            Register
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>
