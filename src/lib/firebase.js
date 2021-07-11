/* eslint-disable prettier/prettier */
import Firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyAnyIoPTHR4ApTjhhurDXZCB-V6lGnazjQ',
    authDomain: 'instagram-yt-ecbdc.firebaseapp.com',
    projectId: 'instagram-yt-ecbdc',
    storageBucket: 'instagram-yt-ecbdc.appspot.com',
    messagingSenderId: '42511159306',
    appId: '1:42511159306:web:623d835cd14810a2bbcff3'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };

