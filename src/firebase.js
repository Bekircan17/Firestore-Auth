import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyArFTy9C6jhZQhl8dEpCjD0wKFPwxu1R7E",
    authDomain: "firestore-auth-b6c5f.firebaseapp.com",
    projectId: "firestore-auth-b6c5f",
    storageBucket: "firestore-auth-b6c5f.appspot.com",
    messagingSenderId: "105035525020",
    appId: "1:105035525020:web:751727b2b90e484f3cf659"
  };

  const app = firebase.initializeApp(firebaseConfig)
  export const db = firebase.firestore()