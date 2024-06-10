import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import { Navigation } from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication.jsx';

function App() {

    const Shop = () => {
        return <div>Shop</div>
    }
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index={true} element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='/auth' element={<Authentication />} />
            </Route>
        </Routes>
    );
}

export default App;