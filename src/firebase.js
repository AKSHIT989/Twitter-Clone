// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlGkbm97oPBaSlERkswgGUHEvfA9jsJRs",
  authDomain: "twitter-clone-3e3bc.firebaseapp.com",
  databaseURL: "https://twitter-clone-3e3bc.firebaseio.com",
  projectId: "twitter-clone-3e3bc",
  storageBucket: "twitter-clone-3e3bc.appspot.com",
  messagingSenderId: "1050040200488",
  appId: "1:1050040200488:web:c374415c6f7a0f0518741d",
  measurementId: "G-YX91WGB810",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
