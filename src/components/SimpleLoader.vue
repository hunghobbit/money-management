
<template>
    <Transition 
        enter-active-class="transition-all duration-500 ease-in" 
        enter-from-class="transform translate-x-16 scale-75 opacity-50"
        enter-to-class="transform translate-x-0 scale-100 opacity-100" 
        leave-active-class="transition-all duration-500 ease-out"
        leave-from-class="transform translate-x-16 scale-75 opacity-50" 
        leave-to-class="transform translate-x-0 scale-100 opacity-100" 
        appear
        >
        <div class="w-full flex justify-center items-center p-2">
            <div style="border-top-color: transparent;"
                class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
        </div>
    </Transition>
</template>
<script setup lang="ts">

</script>