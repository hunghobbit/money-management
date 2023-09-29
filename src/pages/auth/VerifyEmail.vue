<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useEmailVerifications } from '../../../composables/useEmailVerifications';
import { auth } from '../../../configs/firebase';
  
const router = useRouter();
const { verifyEmail } = useEmailVerifications();

verifyEmail()
    .then((res) => {
        if(res.emailVerified === true)
            router.push({ name: 'login' });
    })
    .catch((error) => {
        console.log(error);
    });

</script>
<template>
    <h1 class="text-center font-semibold text-emerald-800">Verify Email</h1>
    <p class="text-center text-sm text-emerald-400 font-serif font-light">
        Please check your email for a verification link.
    </p>
    <p class="text-center text-sm text-emerald-400 font-serif font-light">
        If you did not receive the email
    </p>
    <p class="text-center text-sm text-emerald-400 font-serif font-light">
        <button class="bg-emerald-200 hover:bg-slate-200 text-white cursor-pointer font-semibold" @click="verifyEmail">Click here to request another</button>
    </p>
</template>