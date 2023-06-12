<template>
  <!-- Verify Email UI - Send verification email request to user's email -->
  <h1 class="text-lg font-bold">Verify Email</h1>
  <div><button></button></div>
  <p class="text-sm font-thin mt-3 px-3">
    <button
      class="p-3 rounded-lg bg-emerald-500 hover:bg-slate-200 text-white cursor-pointer font-semibold hover:shadow-md hover:shadow-green-300 hover:text-green-500"
      @click="verifyEmail"
      :disabled="user.emailVerified"
    >
      <ShieldCheckIcon v-if="user.emailVerified" class="h-6 w-6 text-green-200" />
      {{ user.emailVerified ? "Verify Email" : "Email Verified }}
    </button>
  </p>
</template>
<script setup>
import { useUser } from "../../../composables/useUser.js";
import { sendEmailVerification } from "firebase/auth";
import { ShieldCheckIcon } from "@heroicons/vue/20/solid";
import { ref, computed } from "vue";

const { userInfo } = useUser();
const user = computed(() => userInfo());
if (user == null) {
  this.$router.push("/login");
}
const verifyEmail = async () => {
  await sendEmailVerification(user.value);
};
</script>
