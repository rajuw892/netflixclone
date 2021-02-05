import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBurf6bhRMOQJFl6YdZlAzEl9dlff0uj9U",
    authDomain: "netflixclone-edd85.firebaseapp.com",
    projectId: "netflixclone-edd85",
    storageBucket: "netflixclone-edd85.appspot.com",
    messagingSenderId: "314199392862",
    appId: "1:314199392862:web:daa9e83e01cecf9447aacf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { auth }
  export default db;