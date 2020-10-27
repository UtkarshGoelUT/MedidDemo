import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCTyroOw_IOlvikGTC43hjF58EBL4kF0Dw",
  authDomain: "medid-2a2ea.firebaseapp.com",
  databaseURL: "https://medid-2a2ea.firebaseio.com",
  projectId: "medid-2a2ea",
  storageBucket: "medid-2a2ea.appspot.com",
  messagingSenderId: "67373232374",
  appId: "1:67373232374:web:007ae0debfbf7e9b303cd7",
  measurementId: "G-DE1M2BK5Y4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default firebase;
export { database };