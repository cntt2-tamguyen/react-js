import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBydpaOYuj2hLoYUO39uUcGFJOwaNKQtCY",
  authDomain: "notereactfedu-1f412.firebaseapp.com",
  databaseURL: "https://notereactfedu-1f412.firebaseio.com",
  projectId: "notereactfedu-1f412",
  storageBucket: "",
  messagingSenderId: "656045350839",
  appId: "1:656045350839:web:28b4b259805ccea8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote');