import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
        apiKey: "AIzaSyBIvGykTan0EA2mYM4UobAUNQDQJ-Za32U",
        authDomain: "crwn-db-45221.firebaseapp.com",
        databaseURL: "https://crwn-db-45221.firebaseio.com",
        projectId: "crwn-db-45221",
        storageBucket: "crwn-db-45221.appspot.com",
        messagingSenderId: "1067335265790",
        appId: "1:1067335265790:web:ed7e2bea5871e6552f64af",
        measurementId: "G-6FXLBFCBSK"
      };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ promt:'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;
