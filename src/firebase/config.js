
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCXTrKiNHFXHEmcn5lBUyqyvjLFRNooLo",
  authDomain: "react-cursos-8ba58.firebaseapp.com",
  projectId: "react-cursos-8ba58",
  storageBucket: "react-cursos-8ba58.appspot.com", 
  messagingSenderId: "899812849028",
  appId: "1:899812849028:web:7fbb189b09a38aca6ad9d1"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
