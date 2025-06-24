// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6Y2YW2THD0cH8OSOMjPQqd832uWrNhV8",
    authDomain: "my-ecommerce-react-3b5aa.firebaseapp.com",
    projectId: "my-ecommerce-react-3b5aa",
    storageBucket: "my-ecommerce-react-3b5aa.firebasestorage.app",
    messagingSenderId: "351538963342",
    appId: "1:351538963342:web:a16e75b4312465e4b2fadf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)