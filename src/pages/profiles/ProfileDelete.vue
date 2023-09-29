<template>
  <SimpleModal :isOpen="open" :modalTitle="'Confirm deleting account'" :close-modal="closeDeletePrompt">
    <p>Enter <span class="text-red-700 font-bold">'DELETE'</span> and press 'Delete Account' to surely delete!!</p>
    <form  method="post" class="mt-4">
      <input class="p-2 rounded-md bg-slate-100 text-red-300" type="text" name="confirmDeleteAccount" id="confirm-delete-account" placeholder="DELETE">
    </form>
  </SimpleModal>
  <div class="p-5 my-6 bg-red-200 rounded-lg">
    <h2 class="text-lg font-bold">Delete Account <span><strong class="text-red-800 p-3 ml-3 bg-red-300 rounded-lg">⚠️ Danger zone</strong></span></h2>
    <div class="flex justify-start mt-4">
      <button @click="openDeletePrompt" class="bg-red-500 text-white px-4 py-3 rounded font-medium">
        Delete Account
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import SimpleModal from "../../components/SimpleModal.vue"
import { ref } from 'vue'
const open = ref(false)
const openDeletePrompt = () => {
  open.value = true; 
}
const closeDeletePrompt = () => {
  open.value = false;
}
const props = defineProps({
  title: String,
});
</script>
