import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBA4yqTOfIy_bvtNpCOlMxl33CnkmRHIik",
    authDomain: "chat-app-d782e.firebaseapp.com",
    projectId: "chat-app-d782e",
    storageBucket: "chat-app-d782e.appspot.com",
    messagingSenderId: "672302910648",
    appId: "1:672302910648:web:7cf28dd80073690df7784d",
    measurementId: "G-YM9D954D6S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
