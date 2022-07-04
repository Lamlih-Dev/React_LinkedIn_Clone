import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyDP_k87hDSX-VaCeCynVC8Jeii-kO_k1PI",
    authDomain: "linkedin-clone-91b13.firebaseapp.com",
    projectId: "linkedin-clone-91b13",
    storageBucket: "linkedin-clone-91b13.appspot.com",
    messagingSenderId: "1097521299525",
    appId: "1:1097521299525:web:ed511f4425800ed386632c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

export { db, auth, googleSignIn };