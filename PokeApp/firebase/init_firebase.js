import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkCCP2GvRnhtMFsRHdg2VjbT5fA61t5jM",
    authDomain: "pokeapp-7d5ec.firebaseapp.com",
    databaseURL: "https://pokeapp-7d5ec.firebaseio.com",
    projectId: "pokeapp-7d5ec",
    storageBucket: "pokeapp-7d5ec.appspot.com",
    messagingSenderId: "568979437543",
    appId: "1:568979437543:web:7decf4718424c9e3afef42"
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;