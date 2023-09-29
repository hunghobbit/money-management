// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase-admin";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdTMiPIHVtljvKsMyA2CX_xfKWMpYJ81Y",
    authDomain: "myvuesimple.firebaseapp.com",
    databaseURL: "https://myvuesimple-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myvuesimple",
    storageBucket: "myvuesimple.appspot.com",
    messagingSenderId: "902262574033",
    appId: "1:902262574033:web:8e09cadead4d86174aaef0"
};
// Initialize Firebase 
const firebase: FirebaseApp = initializeApp(firebaseConfig);

const fireStoreCore: Firestore = getFirestore(firebase);

const auth = getAuth(firebase); 


export { firebase, fireStoreCore,  auth };