<script setup>
import { auth } from "../../../configs/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const router = useRouter();
const resetPassword = async () => {
  let actionCodeSettings = {
    url: "http://localhost:5173/reset-password",
    handleCodeInApp: true,
  };
  await sendPasswordResetEmail(auth, email.value);
  router.push({ name: "reset-password" });
};
</script>
<template>
  <h1 class="text-lg font-bold uppercase text-emerald-700">Forgot Password</h1>
  <div
    class="mt-4 w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
  >
    <form @submit.prevent="resetPassword" action="">
      <div class="mb-4">
        <label for="email" class="sr-only">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          class="bg-gray-100 border-2 w-full p-4 rounded-lg"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="bg-emerald-500 text-white px-4 py-3 rounded font-medium w-full"
        >
          Send Reset Email
        </button>
      </div>
    </form>
  </div>
</template>
