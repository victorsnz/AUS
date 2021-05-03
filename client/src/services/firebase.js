import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbIVfOo4GLANiVuz3ltCqd5IKdxuwGw3Q",
  authDomain: "superheroes-5477e.firebaseapp.com",
  projectId: "superheroes-5477e",
  storageBucket: "superheroes-5477e.appspot.com",
  messagingSenderId: "155804619490",
  appId: "1:155804619490:web:c333be97ce788d964204bb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;