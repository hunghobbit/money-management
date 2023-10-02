<script setup lang="ts">
import SimpleDropdown from "../../components/SimpleDropdown.vue";
import { useUser } from "~/composables/useUser";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import {
  MenuItem
} from '@headlessui/vue'
import { reactive } from "vue";

defineProps(["authenticated", "userInfo"]);

const userMenus = reactive([
  {
    displayContext: "Profile",
    href: "/profile",
  },

]);
const router = useRouter();
const { userInfo } = useUser();
const user = computed(() => userInfo());
const toggle = ref(false);
const authenticated = computed(() => user.value !== null || user.value !== undefined);
</script>


<template>
  <!-- 
  ```DEFAULT HEADER
   -->
  <header class="flex justify-between items-center sm:bg-emerald-200 p-0">
    <div class="sm:hidden sm:bg-white sticky flex justify-between items-center">
      <button @click="toggle = !toggle" class="p-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div aria-modal="true" aria-busy="true" :class="{ 'translate-x-0': toggle, '-translate-x-full': !toggle }"
      class="sm:hidden pt-6 px-8 bg-white w-screen rounded-sm border-spacing-1 absolute top-10 min-h-screen transition-transform">
      <RouterLink :active-class="'bg-slate-200'" :to="{name: 'home'}">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558"
          alt="logo" class="inline ml-3 w-8 h-8" />
        <span class="my-6 text-emerald-500 font-bold"> Simple Money </span>
      </RouterLink>

      <ul class="w-full mt-6 flex flex-col gap-3">
        <li>
        </li>
        <li>
          <RouterLink class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200" :to="{name: 'wallets'}">
            Wallets
          </RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'" class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200"
            :to="{name: 'transactions'}">
            Transactions
          </RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'" class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200"
            :to="{name: 'categories'}">
            Categories
          </RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'" class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200"
          :to="{name: 'contacts'}">
            Contacts
          </RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'" class="block text-lg w-full px-6 py-3 focus-visible:bg-slate-200"
            :to="{name: 'profile'}">
            Profile
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="w-full max-sm:hidden flex justify-between items-center sm:bg-emerald-200">
      <a href="/">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558"
            alt="logo" class="ml-3 w-8 h-8" />
        </div>
      </a>

      <ul class="nav flex flex-wrap justify-start items-center">
        <li>
          <RouterLink :active-class="'bg-slate-200'"
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold" to="/">Home
          </RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'"
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold" to="/wallets">
            Wallets</RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'"
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/transactions">Transactions</RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'"
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"
            to="/categories">Categories</RouterLink>
        </li>
        <li>
          <RouterLink :active-class="'bg-slate-200'"
            class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold" to="/contacts">
            Contacts</RouterLink>
        </li>
      </ul>

      <ul class="flex flex-wrap justify-start items-center gap-x-3 mr-3">
        <li v-if="user">
          <SimpleDropdown :title="user.displayName" :isUserMenuDropdown="true">
            <MenuItem class="hover:bg-gray-100" v-for="item in userMenus">
            <a class="block px-4 py-3 rounded:sm text-sm" :href="item.href">
              <span>{{ item.displayContext }}</span>
            </a>
            </MenuItem>
          </SimpleDropdown>
        </li>
        <li v-if="!authenticated">
          <button @click="$router.push('login')"
            class="text-sm py-2 px-3 bg-slate-300 hover:bg-slate-200 text-green-500 font-medium cursor-pointer outline-double outline-2 outline-green-300">
            Login
          </button>
        </li>
        <li v-if="!authenticated">
          <button @click="$router.push('register')"
            class="text-sm py-2 px-3 bg-slate-300 hover:bg-slate-200 text-red-500 cursor-pointer outline-double outline-2 outline-red-300">
            Register
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>
