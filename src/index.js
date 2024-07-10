import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/Cart';
import { CategoriesProvider } from './context/Categories';
import { Provider } from 'react-redux';
import { store } from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                    <CategoriesProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </CategoriesProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);