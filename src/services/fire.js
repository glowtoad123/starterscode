import React, {useContext, createContext, useState, useEffect} from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'

const fireContext = createContext() 

export function useFireAuthen(){
  return useContext(fireContext)
}

export function Fire({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const app = firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
    })

    const auth = app.auth()

    function readAccount(email, password){
      return auth.signInWithEmailAndPassword(email, password)
    }

    function addAccount(email, password){
      return auth.createUserWithEmailAndPassword(email, password)
    }

    function logout(){
      return auth.signOut()
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })
      
      return unsubscribe
    }, [])
    
    const options = {
      currentUser,
      readAccount,
      addAccount,
      logout
    }



    return(
      <>
        <fireContext.Provider value={options}>
          {!loading && children}
        </fireContext.Provider>
      </>
    )
}
