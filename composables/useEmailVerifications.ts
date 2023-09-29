import { auth } from "../configs/firebase"; 
import { sendEmailVerification } from "firebase/auth"; 

import { ref } from "vue";  

const isPending = ref(false);   
const error = ref(null);

const verifyEmail =  async () => {
    error.value = null;
    isPending.value = true;
    try {
    
        const user = auth.currentUser;
        await sendEmailVerification(user);
        isPending.value = false;
        return user;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
    }
}

export const useEmailVerifications = () => {
    return { error, isPending, verifyEmail }
}