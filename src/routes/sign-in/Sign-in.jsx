import SignUp from '../../components/sign-up/SignUp.jsx';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.js'
import "./Sign-in.scss"



const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign-in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUp />
        </div>
    );
};

export default SignIn;