import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWYQ9r1N_TcDW9TUyuhB2FivJP0GFnVy0",
    authDomain: "auth-project-8987f.firebaseapp.com",
    projectId: "auth-project-8987f",
    storageBucket: "auth-project-8987f.appspot.com",
    messagingSenderId: "546117988239",
    appId: "1:546117988239:web:675a468e12ad02009ba5fa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
