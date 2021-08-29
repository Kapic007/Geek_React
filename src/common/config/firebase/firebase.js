import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "geekreact-5fb09.firebaseapp.com",
  projectId: "geekreact-5fb09",
  storageBucket: "geekreact-5fb09.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
