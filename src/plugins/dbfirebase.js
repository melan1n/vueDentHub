import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const configOptions = {
    apiKey: "AIzaSyCttTh1Gct2Yd1Vm2S5YNOxKLvcPfwFHjw",
    authDomain: "denthub-19cfe.firebaseapp.com",
    databaseURL: "https://denthub-19cfe.firebaseio.com",
    projectId: "denthub-19cfe",
    storageBucket: "denthub-19cfe.appspot.com",
    messagingSenderId: "304563626947",
    appId: "1:304563626947:web:d4bdddc07dcdbaca075376"
  };
  
export const db = firebase.initializeApp(configOptions);
export const firestore = db.firestore();
export const storage = firebase.storage();