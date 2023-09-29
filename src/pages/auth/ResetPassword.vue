<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../../../configs/firebase.js";
import { updatePassword } from "firebase/auth";
import router from "../../../routers";
const newPassword = ref("");
const confirmNewPassword = ref("");

const resetPassword = () => {
  console.log("Reset Password");
  if (newPassword.value === "" || confirmNewPassword.value === "") {
    alert("Please enter your new password");
    return;
  }
  if (newPassword.value !== confirmNewPassword.value) {
    alert("Passwords do not match");
    return;
  }
  if (newPassword.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }
  const user = auth.currentUser
  if (user.metadata.lastSignInTime === user.metadata.creationTime) {
    alert("You must login first");
    return;
  }
  if (user) {
    updatePassword(user, newPassword.value)
      .then(() => {
        alert("Password updated successfully");
        newPassword.value = "";
        confirmNewPassword.value = "";
        router.push({ name: "login" });
      })
      .catch((error) => {
        alert(error.message);
      });
  }
};
</script>
<template>
  <div class="w-full">
    <h1 class="text-center text-2xl font-semibold">Reset Password</h1>
    <form @summit.prevent="resetPassword" method="post">
      <div class="w-full mb-10">
        <input
          placeholder="New Password"
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
          type="password"
          name="newPassword"
          id="newPassword"
          v-model="newPassword"
        />
      </div>
      <div class="w-full mb-10">
        <input
          placeholder="Confirm New Password"
          class="w-full p-4 max-sm:p-3 text-lg max-sm:text-sm sm:rounded-lg max-sm:rounded-full bg-slate-100 focus:outline-1 focus:outline-blue-400"
          type="password"
          name="confirmNewPassword"
          id="confirmNewPassword"
          v-model="confirmNewPassword"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="bg-emerald-500 text-white px-4 py-3 rounded font-medium w-full"
        >
          Reset Password
        </button>
      </div>
    </form>
  </div>
</template>
