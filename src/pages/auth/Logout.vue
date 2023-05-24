<script setup>
import { useRouter } from "vue-router";
import { useSignOut } from "../../../composables/useSignOut.js";
const { logOut, error } = useSignOut();
const router = useRouter();
async function onLogOut() {
    try {
        await logOut();
        router.push({ name: "login" });
    } catch (err) {
        alert(error.value);
    }
}

onLogOut();
</script>
<template>
    <h1>Logout Page</h1>
</template>