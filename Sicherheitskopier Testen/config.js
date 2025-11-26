// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgiDt6qrDZqsb4t_pbaXV1E-ZHS0USUJ0",
  authDomain: "azubi-learn.firebaseapp.com",
  projectId: "azubi-learn",
  storageBucket: "azubi-learn.firebasestorage.app",
  messagingSenderId: "740559151800",
  appId: "1:740559151800:web:2eddc901f8340804d24a4d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// global verfügbar machen
window.auth = auth;
window.db = db;