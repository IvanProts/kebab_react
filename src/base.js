import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCw0P4N9plVyR4EJBPohXilg8r54tdilbo",
    authDomain: "very-hot--burgers.firebaseapp.com",
    databaseURL: "https://very-hot--burgers-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;