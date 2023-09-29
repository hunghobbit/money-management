<template>
  <!-- Verify Email UI - Send verification email request to user's email -->
  <div class="px-6">
    <h1 class="text-lg font-semibold">Verify Email</h1>

    <div class="text-sm font-thin mt-3 px-3">
      <p>
        Please verify your email address. We have sent you an email with a
        verification link to your email address.
      </p>
      <p>
        Click on the below button to verify your email address. If you have not
        received the email, please check your spam folder.
      </p>
      <button
        class="p-3 rounded-lg bg-emerald-500 hover:bg-slate-200 text-white cursor-pointer font-semibold hover:shadow-md hover:shadow-green-300 hover:text-green-500 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none disabled:text-green-500 transition-all duration-200 ease-in-out"
        @click="verifyEmail"
        :disabled="user.emailVerified"
      >
        <ShieldCheckIcon class="h-5 w-5 inline-block" />
        {{  user.emailVerified ? 'Email Verified' : 'Verify Email' }}
        
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUser } from "../../../composables/useUser.js";
import { sendEmailVerification } from "firebase/auth";
import { ShieldCheckIcon } from "@heroicons/vue/20/solid";
import { reactive } from "vue";

const { userInfo } = useUser();
const user = reactive(userInfo());

const verifyEmail = async () => {
  await sendEmailVerification(user, {
    url: "http://localhost:5173/profile",
    handleCodeInApp: true,
  });
};
</script>
