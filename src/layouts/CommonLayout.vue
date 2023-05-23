<script setup>
    import AppHeader from './partials/Header.vue';
    import AppFooter from './partials/Footer.vue';
    import { useRoute } from 'vue-router';
    import { useUser } from '../../composables/useUser.js';
    const { userInfo } = useUser();
</script>

<template>
    <AppHeader :authenticated="$router.currentRoute.value.meta.authenticated" :userInfo="userInfo" />
    <main>
        <div class="main-wrapper py-12 px-3 bg-gray-100 min-h-screen">
            <slot/>
        </div>
    </main>
    <AppFooter />    
</template>