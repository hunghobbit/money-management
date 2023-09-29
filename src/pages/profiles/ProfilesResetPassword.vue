<template>
  <div class="p-5 my-6 bg-white rounded-lg">
    <h1 class="text-lg font-semibold">Reset Password</h1>
    <p class="text-sm text-gray-500">
      You must login first before you can reset your password.
    </p>
    <form class="mt-4 p-2 grid grid-cols-1 gap-y-3 w-full sm:w-2/4" action="" method="post">
      <div class="container sm:flex flex-wrap justify-between items-center gap-x-3">
        <label class="text-md text-gray-600 font-semibold" for="currentPassword"
          >Your Current Password</label
        >
        <input
          class="w-full sm:w-2/3 shadow-sm p-2 text-sm text-gray-900 bg-gray-100 focus:outline-blue-500"
          type="password"
          name="currentPassword"
          id="currentPassword"
        />
      </div>
      <div class="container sm:flex flex-wrap justify-between items-center gap-x-3">
        <label class="text-md text-gray-600 font-semibold" for="newPassword"
          >New Password</label
        >
        <input
          class="w-full sm:w-2/3 shadow-sm p-2 text-sm text-gray-900 bg-gray-100 focus:outline-blue-500"
          type="password"
          name="newPassword"
          id="newPassword"
        />
      </div>
      <div class="container sm:flex flex-wrap justify-between items-center gap-x-3">
        <label
          class="text-md text-gray-600 font-semibold"
          for="confirmNewPassword"
          >Confirm New Password</label
        >
        <input
          class="w-full sm:w-2/3 shadow-sm p-2 text-sm text-gray-900 bg-gray-100 focus:outline-blue-500"
          type="password"
          name="confirmNewPassword"
          id="confirmNewPassword"
        />
      </div>
      <div
        class="container flex justify-center items-center gap-x-3 mt-4"
      >
        <button
          class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full hover:shadow-lg hover:bg-white hover:text-blue-500 hover:shadow-blue-500 drop-shadow-lg transition-all duration-300"
        >
          Reset Password
        </button>
    </div>
    </form>
  </div>
</template>
<script setup lang="ts"></script>
