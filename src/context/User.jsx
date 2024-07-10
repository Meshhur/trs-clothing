// import React, { createContext, useEffect, useReducer, useState } from 'react'
// import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';

// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null
// })



// export const UserProvider = ({ children }) => {
//     // const [currentUser, setCurrentUser] = useState(null);

//     const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
//     console.log(currentUser);


//     const value = { currentUser, setCurrentUser }


//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }