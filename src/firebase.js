import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDm5pBoQaICpdD9dvUp0mLrzO1SsMM_UQ8",
    authDomain: "eshop-bakery.firebaseapp.com",
    projectId: "eshop-bakery",
    storageBucket: "eshop-bakery.appspot.com",
    messagingSenderId: "486500542016",
    appId: "1:486500542016:web:ba6ed37d496dcab5c621a5",
    measurementId: "G-N5Y91TXC67"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};