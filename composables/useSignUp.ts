import { auth } from "../configs/firebase.js";
import { ref } from "vue";
import { 
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
const signUp = async (email:string, password:string, fullName:string) => {
    isPending.value = true; 
    error.value = null;
    try {
        const res = (await createUserWithEmailAndPassword(auth, email, password));
        
        if (!res) {
            throw new Error('Could not complete the signup');
        }
        
        await updateProfile(res.user, { displayName : fullName });

        error.value = null;
        isPending.value = false;
        
        return res;
    } catch (err:any) {
        error.value = err?.message;
    }
}



export const useSignUp = () => {
    return { error, signUp }
}