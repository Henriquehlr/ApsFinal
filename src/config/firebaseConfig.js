import firebase from "firebase/app";
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyDCTNJWfccsuRNNBWdBi2HGbHzpUqlEqOc",
  authDomain: "appreactfirebase-1ade6.firebaseapp.com",
  projectId: "appreactfirebase-1ade6",
  storageBucket: "appreactfirebase-1ade6.appspot.com",
  messagingSenderId: "149295118026",
  appId: "1:149295118026:web:74710db0f7d842b1666633",
  measurementId: "G-PKE1YQYM6T"

};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);

//firebase.analytics();

export default firebase
