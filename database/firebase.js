

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuUoDYNbQ-SbgeuYgcBSoXQjtygdscJZ8",
    authDomain: "pizza-mania-455e2.firebaseapp.com",
    projectId: "pizza-mania-455e2",
    storageBucket: "pizza-mania-455e2.appspot.com",
    messagingSenderId: "205927306191",
    appId: "1:205927306191:web:eb9eb632b164e333bf38ba"
};

firebase.initializeApp(firebaseConfig);

export default firebase;