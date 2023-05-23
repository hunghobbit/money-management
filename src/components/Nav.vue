<script setup>
</script>

<template>
    <ul class="nav flex justify-start items-center">
        <slot/>
        <!-- <li class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"><router-link to="/">Home</router-link></li>
        <li class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"><router-link to="/about">About</router-link></li>
        <li class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"><router-link to="/transactions">Transactions</router-link></li>
        <li class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"><router-link to="/categories">Categories</router-link></li>
        <li class="nav-item p-3 bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold"><router-link to="/contact">Contact</router-link></li> -->
    </ul>
</template>
<style scoped>
    .nav-item {
        display: block;
        border-radius: 0.5rem;
    }
    .active {
        background-color: #10B981;
    }
</style>