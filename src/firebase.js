import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA4IyEXA-BmNhMVLSS26a2c1H1P0Rf7erM",
  authDomain: "linkedin-clone-bcc74.firebaseapp.com",
  projectId: "linkedin-clone-bcc74",
  storageBucket: "linkedin-clone-bcc74.appspot.com",
  messagingSenderId: "606109165468",
  appId: "1:606109165468:web:e66c1bad0b4d876c2b8a59"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth};