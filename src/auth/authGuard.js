import React, { useState, useEffect } from 'react';
import { HomePage } from '../containers/HomePage';


export default function authGuard(ComposedComponent) {
    const AuthenticationCheck = (props) => {
        const [isAuth, setIsAuth] = useState(false);
        const user = localStorage.getItem('user');

        useEffect(() => {
            if (!user) {
                props.history.push('/')
            } else {
                setIsAuth(true);
            }
        }, [props, user]);


        if (!isAuth) {
            return (
                <HomePage user={user} {...props} />
            )
        } else {
            return (
                <ComposedComponent user={user} {...props} />
            )
        }

    }
    return AuthenticationCheck;
}