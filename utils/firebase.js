import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "hyper-9334a.firebaseapp.com",
  projectId: "hyper-9334a",
  storageBucket: "hyper-9334a.appspot.com",
  messagingSenderId: process.env.NEXT_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
