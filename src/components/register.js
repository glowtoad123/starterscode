import React from 'react'

export default function Register(props){
    return(
        <div className="signbox">
            <input 
                onChange={props.typing}
                value={props.email}
                type="email"    
                name="email" 
                placeholder="email" 
                className="signfield"
            />
            <input 
                onChange={props.typing}
                value={props.username}   
                name="username" 
                placeholder="username" 
                className="signfield"
            />
            <input
                onChange={props.typing} 
                value={props.password}    
                type="password" 
                name="password"    
                placeholder="password" 
                className="signfield"
            />
            <button 
                    onClick={props.authenticate}
                    className="submit"
            >Register
            </button>
        </div>
    )
}