import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2P_ou-IZf8_IzI5ukVrtiesxOMsNyjvM",
  authDomain: "cryptonite-f11f7.firebaseapp.com",
  projectId: "cryptonite-f11f7",
  storageBucket: "cryptonite-f11f7.appspot.com",
  messagingSenderId: "375030976995",
  appId: "1:375030976995:web:0378b517f3831f62c3d0d6",
  measurementId: "G-J580FY9KPJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth }; 
export default app;
