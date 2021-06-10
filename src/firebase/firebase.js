import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDFBQrj8y2WKVDszC9zD5974--FGkeRo0E",
    authDomain: "netflix-clone-38bf8.firebaseapp.com",
    databaseURL: "https://netflix-clone-38bf8-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-38bf8",
    storageBucket: "netflix-clone-38bf8.appspot.com",
    messagingSenderId: "185169167762",
    appId: "1:185169167762:web:484b0563b2f4ed6c6fed4b",
    measurementId: "G-017TNSC5MX"
});

const firebaseDatabase = app.database();

export {
    firebaseDatabase
};