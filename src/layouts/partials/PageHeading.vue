<script setup>
    defineProps({
        title: String,
        headingDescription: String
    })
</script>
<template>
    <div class="absolute top-0 left-0 right-0 bg-white w-full mt-12 px-10 py-3 shadow-md">
        <h5 class="text-2xl font-bold">{{title}}</h5>
        <p class="mt-1 px-2 text-xs font-thin opacity-50">{{headingDescription}}</p>
    </div>
</template>