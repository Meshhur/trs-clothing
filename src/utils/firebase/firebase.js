import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDt60QEftx_XX7yZeiYjl2V1m5fmMiiOps",
    authDomain: "trs-clothing-db.firebaseapp.com",
    projectId: "trs-clothing-db",
    storageBucket: "trs-clothing-db.appspot.com",
    messagingSenderId: "572291440246",
    appId: "1:572291440246:web:f2cae6ca2688073fd24957"
};

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = { displayName: "" }) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef
}

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const createAuthUserEmailPass = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};