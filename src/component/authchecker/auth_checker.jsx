import React from 'react'
import { Navigate } from 'react-router-dom' 


const AuthChecker = ({children}) => {
    const isAuth = localStorage.getItem('token') 
    // console.log('my token is',isAuth)

    if(!isAuth ) {
        return (
            <Navigate to='/login'replace='true'/> 
        )   
    } 
    return children
}

export default AuthChecker;