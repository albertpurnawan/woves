import React from 'react';
import { Route, Redirect } from 'react-router';

function ProtectedRoute({component : Component, ...rest}) {
    const isSignedIn = window.gapi ? window.gapi.auth2.getAuthInstance().isSignedIn.get() : false
    return (
        <Route {...rest} render = {props => {
            return !!isSignedIn ? <Component {...props} /> : <Redirect to="/" />
        }}>
        </Route>
    )
}

export default ProtectedRoute;