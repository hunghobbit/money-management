import { auth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, toValue } from "vue";
   
const user = ref(auth.currentUser);
// const error = ref(null);

onAuthStateChanged(auth, (_user) => {
    if (_user)  user.value = _user ;
});

function userInfo() {
    return toValue(user);
}



export const useUser = () => ({ userInfo });

