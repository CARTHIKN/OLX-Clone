import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAwIh0kj8EMB0X-0kkPuasnJRC75GoHZvI",
    authDomain: "olx-clone-49e18.firebaseapp.com",
    projectId: "olx-clone-49e18",
    storageBucket: "olx-clone-49e18.appspot.com",
    messagingSenderId: "544850950012",
    appId: "1:544850950012:web:af97449091478999df96f9",
    measurementId: "G-EL9Q0K4WKX"
  };


export default firebase.initializeApp(firebaseConfig)