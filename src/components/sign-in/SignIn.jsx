import React, { useState } from 'react';
import { signInWithGooglePopup, signInWithEmailPass } from '../../utils/firebase/firebase';
import FormInput from '../form-input/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import "./SignIn.scss";
import { useDispatch } from 'react-redux';
import { EmailSignInStart, googleSignInStart } from '../../store/user/User.action';

const defaultFormFields = {
    email: "",
    password: "",
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(EmailSignInStart(email, password))
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                case 'auth/invalid-credential':
                    alert('invalid credential');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type='button'
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
