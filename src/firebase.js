import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth"
import "firebase/firestore";

 var firebaseConfig = {
    apiKey: "AIzaSyD46FRE9r3rQXloHUSbesJ5Oh81p6IEc6s",
    authDomain: "eshop-5d075.firebaseapp.com",
    projectId: "eshop-5d075",
    storageBucket: "eshop-5d075.appspot.com",
    messagingSenderId: "721788730628",
    appId: "1:721788730628:web:eeae2408030a40ff92a451",
    measurementId: "G-GPXH30YPZH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth()
  const db = firebase.firestore()
  export {db,auth}