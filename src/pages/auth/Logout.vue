<script setup>
import { useRouter } from "vue-router";
import { useSignOut } from "../../../composables/useSignOut.js";
import { onMounted } from "vue";
const { logOut, error } = useSignOut();
const router = useRouter();
async function onLogOut() {
    try {
        await logOut();
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }
}
onMounted(() => {
    onLogOut();
});

router.push({ name: "login" });
</script>
<template>
    <h1>Logout Page</h1>
    <div>Loading <span class="floating-dot">.</span><span class="floating-dot">.</span><span class="floating-dot">.</span></div>
</template>