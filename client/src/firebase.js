// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-7ae6c.firebaseapp.com',
  projectId: 'mern-blog-7ae6c',
  storageBucket: 'mern-blog-7ae6c.appspot.com',
  messagingSenderId: '999095800430',
  appId: '1:999095800430:web:c8dd5254de6cb0a2f30c7f',
  measurementId: "G-HD2ZRHDZQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
