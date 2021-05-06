// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAeVNi86jrGE84R7KrWm1UUUtEOYQRv4jI',
  authDomain: 'todo-app-react-12b3e.firebaseapp.com',
  projectId: 'todo-app-react-12b3e',
  storageBucket: 'todo-app-react-12b3e.appspot.com',
  messagingSenderId: '244881871012',
  appId: '1:244881871012:web:0f66ca3f6bb2bf704c5631',
  measurementId: 'G-2T6W819HGN',
});

const db = firebaseApp.firestore();

export { db };
