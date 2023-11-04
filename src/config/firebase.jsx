// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDatabase, ref as rtdbRef, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDuAtS9V4eiP49Gq8n3-CM9TJSZdfqRNtk",
    authDomain: "train-site.firebaseapp.com",
    projectId: "train-site",
    storageBucket: "train-site.appspot.com",
    messagingSenderId: "79077593679",
    appId: "1:79077593679:web:b4db26802f729fd24d903a",
    measurementId: "G-11B18P78Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

export {
    auth,
    googleProvider,
    app,
    db,
    storage,
    set, ref,
    rtdbRef, uploadBytes
}




