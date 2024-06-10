import SignIn from '../../components/sign-in/SignIn.jsx';
import SignUp from '../../components/sign-up/SignUp.jsx';
import "./Authentication.scss"



const Authentication = () => {

    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Authentication;