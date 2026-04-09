import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1_mIk_XaHCEla3MDxg3uYK9ZK2rMK7Yw",
  authDomain: "viteprojeto.firebaseapp.com",
  projectId: "viteprojeto",
  storageBucket: "viteprojeto.firebasestorage.app",
  messagingSenderId: "319338911266",
  appId: "1:319338911266:web:30732584057d06b684dc7b"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
