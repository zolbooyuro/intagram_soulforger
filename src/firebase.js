import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAkL3zLpkO2SfiRDCtcRlR8SPwlfuELPVI",
    authDomain: "instagram-b7339.firebaseapp.com",
    databaseURL: "https://instagram-b7339.firebaseio.com",
    projectId: "instagram-b7339",
    storageBucket: "instagram-b7339.appspot.com",
    messagingSenderId: "1022014031321",
    appId: "1:1022014031321:web:266c6a3046509cb19605c8",
    measurementId: "G-Q39R7C4VLW"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();