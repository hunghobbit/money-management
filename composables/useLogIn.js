import { auth } from '../configs/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const error = ref(null);
const isPending = ref(false);
const signUp = async (email, password) => {
    error.value = null;
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) {
        error.value = 'Incorrect login credentials';
        return;
    }   
    if(localStorage.getItem('client_app') === null) {
        localStorage.setItem('client_app', JSON.stringify({ hasAccount: true, userAgent: navigator.userAgent, isLogged: true }));
    }
    sessionStorage.setItem('currentUser', JSON.stringify(response.user.uid));
    error.value = null;
    return response;
}

export const useLogIn = () => { 
    return { error, signUp, isPending }
}