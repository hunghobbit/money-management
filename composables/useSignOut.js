import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";
import { ref } from "vue";


const error = ref(null);
const isPending = ref(false);


const logOut = async () => {
    error.value = null;
    isPending.value = true;
    try {
        const response = await signOut(auth);
        if(!response) {
            throw new Error('Could not complete the sign out');
        }

        sessionStorage.removeItem('currentUser');
        localStorage.setItem('client_app', JSON.stringify({ hasAccount: true, userAgent: navigator.userAgent, isLogged: false }));
        error.value = null;
        isPending.value = false;
        return response;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
    }
}

export const useSignOut = () => {
    return { error, isPending, logOut }
}