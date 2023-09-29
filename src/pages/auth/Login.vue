<script setup lang="ts">
import { useRouter } from "vue-router";
import { useLogIn } from "../../../composables/useLogIn";
import { computed, ref } from "vue";
import SimpleModal from "../../components/SimpleModal.vue";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { DialogTitle } from "@headlessui/vue";

const email = ref("");
const password = ref("");
const router = useRouter();
var { signUp, isPending, error } = useLogIn();

const isOpen = ref(false);
const errorMassage = computed(() => {
  return error.value;
});
const logIn = async () => {
  try {
    await signUp(email.value, password.value);
    router.push("/");
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("auth/user-not-found")) {
      error.value = "User not found";
    }
    if (err.message.includes("auth/wrong-password")) {
      error.value = "Wrong password";
    }
    if(err.message.includes("auth/too-many-requests")){
      error.value = "Too many requests, please try again later";
    }
    if(err.message.includes("auth/invalid-email")){
      error.value = "Invalid email";
    }
    isOpen.value = true;
  }
};
const closeModalIfError = () => {
  isOpen.value = false;
  error.value = "";
};
</script>
<template>
  <!-- Add dialog to warning if login Not found user  -->
  <SimpleModal :show="isOpen">
    <DialogTitle
      class="flex justify-between items-center text-2xl text-center text-slate-500 mb-8 font-bold"
    >
      <div></div>
      <div class="text-center text-red-500">
        {{ errorMassage }}
      </div>
      <button @click="closeModalIfError">
        <XMarkIcon
          class="h-6 w-6 outline-none focus:outline-none text-red-500 hover:text-gray-700 justify-self-end"
        />
      </button>
    </DialogTitle>
  </SimpleModal>
  <form @submit.prevent="logIn" class="w-full max-sm:min-h-full rounded-lg">
    <h2 class="text-2xl text-center text-slate-400 mb-8">Login</h2>
    <div class="lg:px-12 lg:pb-10 md:px-6 md:pb-6 max-sm:px-3 max-sm:pb-3">
      <div class="w-full md:mb-5 max-md:mb-10">
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Email Address"
            class="w-full border rounded-md max-sm:rounded-full p-4 text-gray-700 focus:outline-blue-400"
            v-model="email"
            id="email"
            name="email"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="w-full md:mb-5 max-md:mb-10">
        <div class="flex items-center">
          <input
            type="password"
            placeholder="Password"
            class="w-full border rounded-md max-sm:rounded-full p-4 text-gray-700 focus:outline-blue-400"
            v-model="password"
            id="password"
            name="password"
            autocomplete="off"
          />
        </div>
      </div>
      <button
        type="submit"
        class="w-full py-2 mt-8 rounded-full bg-blue-400 text-gray-100 focus:outline-none"
      >
        Login
      </button>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a
        @click="$router.push('/forgot-password')"
        class="inline-block mr-12 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor-pointer"
        >Forgot Password?</a
      >
      <a
        @click="$router.push('/register')"
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor-pointer"
        >Not have account? Signup</a
      >
    </div>
  </form>
</template>
