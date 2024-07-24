import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import { Navigation } from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication.jsx';
import Shop from './routes/shop/Shop.jsx';
import Checkout from './routes/checkout/Checkout.jsx';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/User.action.js';
import { useDispatch } from 'react-redux';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession())
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