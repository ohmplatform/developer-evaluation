import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyDo1mAtxx-Jk7neCYN9ZL2ETG3AiGENdJM",
    authDomain: "todoapp-9e3b3.firebaseapp.com",
    projectId: "todoapp-9e3b3",
    storageBucket: "todoapp-9e3b3.appspot.com",
    messagingSenderId: "1072073112374",
    appId: "1:1072073112374:web:69ca6052c48d68fd6b9197"
};



export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);