import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIF4f7oxLDJ39plRkqH4-xCXFmZ_Ozkxk",
  authDomain: "instagram-clone-react-9f31b.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-9f31b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instagram-clone-react-9f31b",
  storageBucket: "instagram-clone-react-9f31b.appspot.com",
  messagingSenderId: "677003081935",
  appId: "1:677003081935:web:7dd81e5e33b09083d95fba",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
