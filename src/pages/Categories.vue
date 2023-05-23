<template>
    <div class="absolute top-0 left-0 right-0 bg-white w-full mt-12 p-10">
        <h5 class="text-lg font-bold">Title</h5>
        <p class="text-sm font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    </div>
</template>
<script setup>
    const props = defineProps({
        title: String
    })
</script>