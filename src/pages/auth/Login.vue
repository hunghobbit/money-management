<script setup>
import { useRouter } from 'vue-router';
import { useLogIn } from '../../../composables/useLogIn';
import { computed, ref } from 'vue';

const email = ref('');
const password = ref('');
const router = useRouter();
const { signUp, isPending, error } = useLogIn();

const logIn = async () => {
  const res = await signUp(email.value, password.value);
  if(res) {
    console.log('Success to login');
    console.log(res);
    router.push({ name: 'home' });
  }
};  

</script>
<template>
  <form @submit.prevent="logIn" class="w-full max-sm:min-h-full rounded-lg" >
    
    <h2 class="text-2xl text-center text-slate-400 mb-8">Login</h2>
    <div class="lg:px-12 lg:pb-10 md:px-6 md:pb-6 max-sm:px-3 max-sm:pb-3">
      <div class="w-full md:mb-5 max-md:mb-10">
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Email Address"
            class="w-full  border rounded-md max-sm:rounded-full p-4 text-gray-700 focus:outline-blue-400"
            v-model="email"
            />
        </div>
      </div>
      <div class="w-full md:mb-5 max-md:mb-10">
        <div class="flex items-center">
          <input
            type="password"
            placeholder="Password"
            class="w-full  border rounded-md max-sm:rounded-full p-4 text-gray-700 focus:outline-blue-400"
            v-model="password"
            />
        </div>
      </div>
      <button
        type="submit"
        class="w-full py-2 mt-8 rounded-full bg-blue-400 text-gray-100 focus:outline-none"
      >
        Login
      </button>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a
        @click="$router.push('/forgot-password')"
        class="inline-block mr-12 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor-pointer"
        >Forgot Password?</a>
      <a
        @click="$router.push('/register')"  
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor-pointer"
        >Not have account? Signup</a>
    </div>
  </form>
</template>
