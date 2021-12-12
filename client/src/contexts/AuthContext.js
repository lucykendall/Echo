import { auth } from '../firebase';
import React, { useContext, useState, useEffect } from 'react' //importing auth module from firebase

const AuthContext = React.createContext()

export function useAuth() { //useAuth hook
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
        //firebase sets local storage and tokens for you and can verify if you have a user already signed in
    }

    useEffect(() => { //only want to run this when we mount the component
        const unsubscribe = auth.onAuthStateChanged(user => { // notifies you whenever user gets changed
            setCurrentUser(user)
            setLoading(false) //when this changes it means we are done loading and it's a verification to see there is a user
        })

        return unsubscribe //unsubscribes from the listener whenever we call onAuthStateChanged
    }, [])

    const value = {
        currentUser,
        signup
    }
    //if not loading, we want to render out the children
    return ( 
        <AuthContext.Provider value={value}>
            {!loading && children} 
        </AuthContext.Provider>
    )
}
