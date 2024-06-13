import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }
}

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

export const CartContext = createContext({
    dropdownStatus: false,
    setDropdownStatus: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {

    const [dropdownStatus, setDropdownStatus] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])
    
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItem = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove))
    }

    const value = {
        dropdownStatus,
        setDropdownStatus,
        addItemToCart,
        cartItems,
        cartCount,
        removeItem,
        clearItemFromCart,
        cartTotal,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}