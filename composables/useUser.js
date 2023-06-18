import { auth } from "../configs/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";   
const user = ref(auth.currentUser);
// const error = ref(null);

onAuthStateChanged(auth, (_user) => {
    if (_user)  user.value = _user;
});

function userInfo() {
    return user.value;
}

export const useUser = () => {
    return { userInfo };
}
