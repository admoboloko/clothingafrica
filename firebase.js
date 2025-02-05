// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw7WQi5KQ7BkRe_Xbd5AdjWo2XRwtjh1o",
  authDomain: "africanclothing2.firebaseapp.com",
  projectId: "africanclothing2",
  storageBucket: "africanclothing2.appspot.com",
  messagingSenderId: "232363471094",
  appId: "1:232363471094:web:309e8059cd0e632aebfcd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}