import { createContext, useState } from "react";


export const CartContext = createContext({
    dropdownStatus: false,
    setDropdownStatus: () => { },
})

export const CartProvider = ({ children }) => {

    const [dropdownStatus, setDropdownStatus] = useState(false)
    const value = { dropdownStatus, setDropdownStatus }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}