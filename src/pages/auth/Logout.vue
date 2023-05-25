<script setup>
import { useRouter } from "vue-router";
import { useSignOut } from "../../../composables/useSignOut.js";
import { onMounted } from "vue";
const { logOut, error } = useSignOut();
const router = useRouter();
async function onLogOut() {
    try {
        await logOut();
        router.push({ name: "home" });
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }
}
onMounted(() => {
    onLogOut();
});
</script>
<template>
    <h1>Logout Page</h1>
    <div>Loading <span class="floating-dot">.</span><span class="floating-dot">.</span><span class="floating-dot">.</span></div>
</template>