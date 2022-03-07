import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAmq_u2_U-GjDgCtMlTQ4zmY4QYAsPEQX4',
  authDomain: 'messaging-app-mini-project.firebaseapp.com',
  projectId: 'messaging-app-mini-project',
  storageBucket: 'messaging-app-mini-project.appspot.com',
  messagingSenderId: '320185406318',
  appId: '1:320185406318:web:7d801d003843fe2a5aa77f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
