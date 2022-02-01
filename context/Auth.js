import React, { useState, createContext, useEffect } from "react";
import { getAppLaunched, setAppHasLaunched } from "../utils/storage";



const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [firstLoaded, setFirstLoaded] = useState(false)




    useEffect(() => {
        getAppLaunched().then(
            (response) => {
                if (response === null || response === undefined) {
                    console.log("First used ", response)
                    alert("First time use of app")

                    setFirstLoaded(true)
                    console.log(firstLoaded)
                    setAppHasLaunched()
                }
                else {
                    setFirstLoaded(false)
                    console.log(firstLoaded)
                    console.log("Present ", response)
                    alert("app has been used for some time")
                }
            }
        )
    }, [])




    return (
        <AuthContext.Provider value={{ firstLoaded, setFirstLoaded, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }