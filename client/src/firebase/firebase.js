import firebase from 'firebase/app'
import 'firebase/auth'


// Initialize Firebase
const config = {
    apiKey: "AIzaSyDzMlSpXcDp_C4nFXYlmsJcC262tJyqAkQ",
    authDomain: "save-the-date-5f217.firebaseapp.com",
    databaseURL: "https://save-the-date-5f217.firebaseio.com",
    projectId: "save-the-date-5f217",
    storageBucket: "save-the-date-5f217.appspot.com",
    messagingSenderId: "865408047576"
  };
  firebase.initializeApp(config);

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const auth = firebase.auth();

export {
  auth,
};