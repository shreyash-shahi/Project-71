import firebase from 'firebase';
require("@firebase/firestore")
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyDuSo4SDA2_26DHbnkzAEPsmugAfFcof5g",
  authDomain: "complaint-forum-28f6a.firebaseapp.com",
  projectId: "complaint-forum-28f6a",
  storageBucket: "complaint-forum-28f6a.appspot.com",
  messagingSenderId: "553445445006",
  appId: "1:553445445006:web:b848fe632e74baa49428df"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  
  export default firebase.firestore()

