import React from 'react'
import "./Sign-in.scss"
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.js'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign-in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn