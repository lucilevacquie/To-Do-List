import React, {createContext, useContext, useState} from "react";

const loginContext = createContext()

export const useLoginContext = () => useContext(loginContext)

const LoginProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const [username, setUsername] = useState()

    const login = (name) => {
        setUsername(name)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.clear()
        setUsername("")
        setIsLoggedIn(false)
    }

    const state = {
        isLoggedIn,
        username,
        login, 
        logout
    }

    return(
    <loginContext.Provider value={state}>{children}</loginContext.Provider>
    )
}

export default LoginProvider;