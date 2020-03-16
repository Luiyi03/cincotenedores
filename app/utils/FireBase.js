import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB387tGvfvs85dTcZ-yR-JJB5JzF6fqJAQ",
  authDomain: "tenedores-4aa51.firebaseapp.com",
  databaseURL: "https://tenedores-4aa51.firebaseio.com",
  projectId: "tenedores-4aa51",
  storageBucket: "tenedores-4aa51.appspot.com",
  messagingSenderId: "378752782266",
  appId: "1:378752782266:web:73599089f7b4e017779783"
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);
