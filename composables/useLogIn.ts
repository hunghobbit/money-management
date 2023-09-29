import { auth } from '../configs/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';


const error = ref(null);
const isPending = ref(false);
const signIn = async (email, password) => {
    error.value = null;
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) {
        error.value = 'Incorrect login credentials';
        return;
    }   
    
    sessionStorage.setItem('currentUser', JSON.stringify(response.user));
    isPending.value = false;    
    error.value = null;
    return response;
}

export const useLogIn = () => { 
    return { error, signIn, isPending }
}