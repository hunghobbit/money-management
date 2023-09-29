<template>
  <Dialog :open="isOpen" class="relative z-50">
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel class="w-full max-w-2xl rounded bg-white p-3">
        <DialogTitle>{{ modalTitle }}</DialogTitle>
        <hr class="divide-y-2 divide-emerald-400">
        <slot />
        
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

defineProps(
  {
    modalTitle: String,
    isOpen: Boolean,
  }
)

</script>
