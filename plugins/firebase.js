import firebase from 'firebase/app';
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyAChPWc45jFssklFpPA7kbZA_5k-9WdHUc",
    authDomain: "nuxt-1-1deb8.firebaseapp.com",
    databaseURL: "https://nuxt-1-1deb8.firebaseio.com",
    projectId: "nuxt-1-1deb8",
    storageBucket: "",
    messagingSenderId: "695851455126",
    appId: "1:695851455126:web:e1ff84ce3f7c1805"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage};

