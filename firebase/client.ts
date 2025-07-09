// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEaW4-vRhh5lxKJuRVCIVkHADjCGqTT-E",
  authDomain: "rehearse-46c1a.firebaseapp.com",
  projectId: "rehearse-46c1a",
  storageBucket: "rehearse-46c1a.firebasestorage.app",
  messagingSenderId: "201723678611",
  appId: "1:201723678611:web:a6017e146c4435d52ae266",
  measurementId: "G-S1RDDXJS5C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
