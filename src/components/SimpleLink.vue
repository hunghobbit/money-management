<template>
    <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
        <slot />
    </a>
    <router-link v-else v-bind="$props" custom v-slot="{ isActive, href, navigate }">
        <a v-bind="$attrs" :href="href" @click="navigate" :class="isActive ? activeClass : inactiveClass">
            <slot />
        </a>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useLink } from 'vue-router'
defineOptions({
    inheritAttrs: false,
    name: "SimpleLink",
    
})

</script>