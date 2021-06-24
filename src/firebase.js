import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBsjkNPk2a9Kuav1iD-hnxqbbhz4w7lV6Y",
  authDomain: "personal-messenger-c5c87.firebaseapp.com",
  projectId: "personal-messenger-c5c87",
  storageBucket: "personal-messenger-c5c87.appspot.com",
  messagingSenderId: "476759828957",
  appId: "1:476759828957:web:af54a791f5f0f8e5936e34",
});

const db = firebaseApp.firestore();

export default db;
