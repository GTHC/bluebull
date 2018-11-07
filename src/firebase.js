import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAE_-dLqbmO1n6-FDRKB55bTZpqY0OX3Vo',
    authDomain: 'gthc-kville.firebaseapp.com',
    databaseURL: 'https://gthc-kville.firebaseio.com',
    projectId: 'gthc-kville',
    storageBucket: 'gthc-kville.appspot.com',
    messagingSenderId: '661641447297',
  };

firebase.initializeApp(config);

export default firebase;
