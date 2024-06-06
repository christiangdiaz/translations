// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1eJR6EE3FYtm53LIXZb7LAN8E62Kw1qk",
  authDomain: "perfect-accent-8c495.firebaseapp.com",
  projectId: "perfect-accent-8c495",
  storageBucket: "perfect-accent-8c495.appspot.com",
  messagingSenderId: "468507266478",
  appId: "1:468507266478:web:fabf8e5a5b9e4cbd3dcc3f",
  measurementId: "G-5M63RTVV7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
