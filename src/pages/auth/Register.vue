<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useSignUp } from '../../../composables/useSignUp.js'
const router = useRouter(); 
const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const { signUp } = useSignUp();
const onSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }
  console.log({ fullName, email, password });
  const res = signUp(email.value, password.value, fullName.value);
  if(res) {
    console.log(res);
    router.push({ name: "login",  });
  }
};

</script>

<template>
  <!-- Alert Modals -->

  <form @submit.prevent="onSubmit" class="w-full rounded-lg max-sm:min-h-screen">
    <h1 class="text-center text-2xl font-semibold">Register</h1>
    <div class="my-12 sm:px-12 max-sm:my-24">
      <div class="w-full mb-10">
        <input
          placeholder="Email Address"
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
          type="email"
          name="email"
          id="email"
          v-model="email"
        />
      </div>
      <div class="w-full mb-10">
        <input
          placeholder="Full Name"
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
          type="text"
          name="fullName"
          id="fullName"
          v-model="fullName"
        />
      </div>
      <div class="w-full mb-10">
        <input
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
      <div class="w-full mb-10">
        <input
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
          placeholder="Confirm Password"
          type="password"
          name="confirm-password"
          id="confirm-password"
          v-model="confirmPassword"
        />
      </div>
      <div class="w-full mt-24">
        <input
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm text-white font-medium bg-red-500 border-solid hover:bg-red-800 rounded-full cursor-pointer"
          type="submit"
          value="Signup"
        />
      </div>
    </div>
    <hr />
    <div class="flex justify-center items-center mt-12">
      <a
        @click="$router.push('/login')"
        class="inline-block mr-12 align-baseline font-bold text-sm text-blue-500 hover:text-blue-400 cursor-pointer"
        >Already have an account? Login</a
      >
    </div>
  </form>
</template>
