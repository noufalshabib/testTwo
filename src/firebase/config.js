import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMvPzA7DTcZcjmsW1JEiJa8upFCEH7H5c  ",
  authDomain: "testtwo-a29c8.firebaseapp.com",
  databaseURL: "https://testtwo-a29c8.firebaseio.com/",
  projectId: "testtwo-a29c8",
  storageBucket: "testtwo-a29c8.appspot.com",
  messagingSenderId: "377282449775  ",
  appId: "377282449775:ios:645d78c18d7b2e9d62589a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
