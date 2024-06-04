import { initializeApp } from "firebase/app";

// const auth = getAuth(firebaseApp);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdcLYB9mGeu_Dhb5HJixzrfmwI3vUjA0w",
  authDomain: "mothergp-3195a.firebaseapp.com",
  projectId: "mothergp-3195a",
  storageBucket: "mothergp-3195a.appspot.com",
  messagingSenderId: "971140111566",
  appId: "1:971140111566:web:8cc4a482bda1b717eac49f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
};

// provider.setCustomParameters({ prompt: "select_account" });
// import "firebase/compat/auth";
// import firebase from "firebase";
// import { auth, getAuth } from "firebase/auth";

// export const firebaseConfig = {
//   apiKey: "AIzaSyDdcLYB9mGeu_Dhb5HJixzrfmwI3vUjA0w",
//   authDomain: "mothergp-3195a.firebaseapp.com",
//   projectId: "mothergp-3195a",
//   storageBucket: "mothergp-3195a.appspot.com",
//   messagingSenderId: "971140111566",
//   appId: "1:971140111566:web:8cc4a482bda1b717eac49f",
// };
// firebase.initializeApp(firebaseConfig);
// // const auth = firebase.auth();
// const auth = getAuth(app);
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// export const firebaseConfig = {
//   apiKey: "AIzaSyDdcLYB9mGeu_Dhb5HJixzrfmwI3vUjA0w",
//   authDomain: "mothergp-3195a.firebaseapp.com",
//   projectId: "mothergp-3195a",
//   storageBucket: "mothergp-3195a.appspot.com",
//   messagingSenderId: "971140111566",
//   appId: "1:971140111566:web:8cc4a482bda1b717eac49f",
// };

// // Initialize firebase and google providerfirebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
