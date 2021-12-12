import { auth } from '../firebase';
import React, { useContext, useState, useEffect } from 'react' //importing auth module from firebase

const AuthContext = React.createContext() //allows you share currentUser signed in - holds the state rather than passing down by props

export function useAuth() { //useAuth hook
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
        //firebase sets local storage and tokens for you and can verify if you have a user already signed in
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => { //only want to run this when we mount the component
        const unsubscribe = auth.onAuthStateChanged(user => { // notifies you whenever user gets changed
            setCurrentUser(user)
            setLoading(false) //when this changes it means we are done loading and it's a verification to see there is a user
        })

        return unsubscribe //unsubscribes from the listener when the component is unmounted 
    }, [])

    const variables = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword //exporting function
    }
    //if not loading, we want to render out the children
    return ( 
        <AuthContext.Provider value={variables}>
            {!loading && children} 
        </AuthContext.Provider>
    )
}