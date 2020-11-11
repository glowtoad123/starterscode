import React, {useState, useEffect, useContext, createContext} from 'react'
import Login from "../components/login";
import Register from "../components/register"
import {useFireAuthen} from '../services/fire'

export default function Enter(){

    const [account, setAccount] = useState({})

    const {readAccount, addAccount} = useFireAuthen()

    function readingProgress(event){
        var name = event.target.name
        var value = event.target.value
        setAccount(current => ({...current, [name]: value}))
        console.log(account)
    }

    async function readingAccount(event){
        event.preventDefault()

        try {
            await readAccount(account.email, account.password)
        } catch {
            alert("wrong")
        }
    }

    async function addingAccount(event){
        event.preventDefault()

        try {
            await addAccount(account.email, account.password)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <Login 
                typing={readingProgress} 
                authenticate={readingAccount}
                password={account.password}
                email={account.email}
            />
            <Register 
                typing={readingProgress} 
                authenticate={addingAccount}
                email={account.email}
                password={account.password}
                username={account.username}
            />
        </>
    )
}