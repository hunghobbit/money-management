import { auth } from "../configs/firebase";
import { signOut, Auth, AuthError } from "firebase/auth";
import type { ErrorCallback } from "typescript";
import { ref } from "vue";
import type { ErrorTypes } from "vue-router";


const error = ref({});
const isPending = ref(null)

const logOut = async () => {
    error.value = {};
    try {
        const res = await signOut(auth);
        
        sessionStorage.removeItem('user');
        
        error.value = {};
        return res;
    } catch (err: any) {
        error.value = err?.message;
    }
}

export const useSignOut = () => ({ error, logOut, isPending });