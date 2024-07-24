import React, { useState } from 'react'
import { createAuthUserEmailPass, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import FormInput from '../form-input/FormInput'
import "./SignUp.scss"
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/User.action'

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUp = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName))
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use")
            } else {
                console.log("user creation encountered an error", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className='sign-up-container'>
            <h2 className=''>Do not have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password} />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp