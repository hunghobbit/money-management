<template>
  <div class="rounded-2xl p-5 mt-16">
    <div class="mb-4">
      <h2 class="font-semibold text-xl">Edit profile</h2>
    </div>
    <form @submit.prevent="formSubmitted" method="post">
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          :placeholder="currentEmail"
          type="email"
          id="email"
          name="email"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        @input="editEmail"
        autocomplete="off"
          />
      </div>

      <div class="relative mb-4">
        <label for="username" class="leading-7 text-sm text-gray-600"
          >Username</label
        >
        <input
          :placeholder="currentUsername"
          type="text"
          id="username"
          name="username"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        @input="editUsername"
          autocomplete="off"
          />
      </div>
      <div class="mb-4">
        <button class="p-3 bg-blue-600 rounded-md text-white text-center font-semibold hover:shadow-md hover:shadow-blue-100 hover:text-blue-900 hover:bg-white" type="submit">
            Save
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useUser } from "../../../composables/useUser.js";
import  { updateProfile }  from "firebase/auth";
import { ref, computed } from "vue";

const { userInfo } = useUser();
const user = computed(() => userInfo());


const editUsername = ref(""),
  editEmail = ref(""),
  currentUsername = computed(() => user.value.displayName),
  currentEmail = computed(() => user.value.email);
const formSubmitted = async (e) => {
    // set the new username and email
    const user = userInfo();
    const newUsername = editUsername.value;
    const newEmail = editEmail.value;
    // update the profile
    await updateProfile(user, {
      displayName: newUsername,
      email: newEmail,
    });
    userRouter().refresh();
}
</script>
