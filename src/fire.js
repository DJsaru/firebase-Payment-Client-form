import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBOmVzSgGnmIBSj0-ex4XD8VQGVJUmYzHE",
    authDomain: "fir-form-d1258.firebaseapp.com",
    projectId: "fir-form-d1258",
    storageBucket: "fir-form-d1258.appspot.com",
    messagingSenderId: "901590851716",
    appId: "1:901590851716:web:775b5c574e796837da62d1"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;