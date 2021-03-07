import firebase from 'firebase/app' 
import 'firebase/database';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyDdyaV8tEZtKWlTjXgs3CygqQKdg8Kehns",
  authDomain: "reactfirst-9a394.firebaseapp.com",
  databaseURL: "https://reactfirst-9a394-default-rtdb.firebaseio.com",
  projectId: "reactfirst-9a394",
  storageBucket: "reactfirst-9a394.appspot.com",
  messagingSenderId: "408465907956",
  appId: "1:408465907956:web:7167ae4d12065c0962fea1",
  measurementId: "G-G7C40VB8GJ"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
