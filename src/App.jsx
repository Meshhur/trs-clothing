import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import { Navigation } from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication.jsx';
import Shop from './routes/shop/Shop.jsx';
import Checkout from './routes/checkout/Checkout.jsx';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.js';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/User.action.js';
import { useDispatch } from 'react-redux';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user))
        });

        return unsubscribe
    }, [])
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index={true} element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    );
}

export default App;