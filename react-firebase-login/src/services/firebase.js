import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4QqrZ4lLnY1XXVUxp_xWd7otEy9kYnuk",
    authDomain: "reactfirebaselogin-3d5e6.firebaseapp.com",
    projectId: "reactfirebaselogin-3d5e6",
    storageBucket: "reactfirebaselogin-3d5e6.appspot.com",
    messagingSenderId: "978676361567",
    appId: "1:978676361567:web:f72a375e091d60e800aeea",
    measurementId: "G-4VKC9DMD2X"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();