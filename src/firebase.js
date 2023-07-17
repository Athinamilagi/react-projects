import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/database'

const firebaseApp = firebase.initializeApp({
  apiKey:"AIzaSyD4B3yCrnk5Axay7Zn0X7LO6QRsBQp6y7w",
  authDomain: "messenger-clone-865ec.firebaseapp.com",
  projectId: "messenger-clone-865ec",
  storageBucket: "messenger-clone-865ec.appspot.com",
  messagingSenderId: "289526249047",
  appId: "1:289526249047:web:23eba589397dbfc98d1512"
}); 

const db = firebaseApp.firestore();

export default db ;