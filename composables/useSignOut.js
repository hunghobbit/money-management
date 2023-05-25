import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";
import { ref } from "vue";


const error = ref(null);


const logOut = async () => {
    error.value = null;
    try {
        const res = await signOut(auth);
        error.value = null;
        return res;
    } catch (err) {
        error.value = err.message;
    }
}

export const useSignOut = () => {
    return { error, logOut }
}