import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyAsiy4WPEFiyS4Fwg6blckzl0NDa4PpOyM",
    authDomain: "crwn-db-5d1cc.firebaseapp.com",
    projectId: "crwn-db-5d1cc",
    storageBucket: "crwn-db-5d1cc.appspot.com",
    messagingSenderId: "244019942726",
    appId: "1:244019942726:web:d35a080e33917053ea8147",
    measurementId: "G-K9HEWDPQKB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;