import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import { Navigation } from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication.jsx';
import Shop from './routes/shop/Shop.jsx';
import Checkout from './routes/checkout/Checkout.jsx';

function App() {

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