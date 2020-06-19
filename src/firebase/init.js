import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAyMTnhe1A1o1o-hWc624S4o2lSXLQn5m8",
    authDomain: "work-chat-85977.firebaseapp.com",
    databaseURL: "https://work-chat-85977.firebaseio.com",
    projectId: "work-chat-85977",
    storageBucket: "work-chat-85977.appspot.com",
    messagingSenderId: "719011950629",
    appId: "1:719011950629:web:19cd1efeec82abce0b0fcc"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()