import { auth } from "../configs/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {  ref } from "vue";

const userInfo = ref(auth.currentUser);
// const error = ref(null);

onAuthStateChanged(auth, (_user) => {
    if (_user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userInfo.value = _user;
    } 
});

export const useUser = () => {
    return { userInfo };
}