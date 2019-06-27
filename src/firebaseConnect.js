import * as firebase from 'firebase';
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

  export const firebaseConnect = firebase.initializeApp(firebaseConfig);
  var data = firebase.database().ref('dataForNote/note2');
  // Sửa dữ liệu
  data.set({
    id:10,
    titleNote:'Ngày 23/12',
    contentNote:'Sinh nhật'
  })
  // data.once('value').then(function(snapshot){
  //   console.log(snapshot.val());
  // })