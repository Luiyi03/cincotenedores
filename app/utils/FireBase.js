import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-authDomain",
  databaseURL: "your-databaseURL",
  projectId: "your-projectId",
  storageBucket: "your-storageBucket",
  messagingSenderId: "your-messagingSenderId",
  appId: "your-appId"
 
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);
