import cookie from 'js-cookie';
import React from 'react';
import { Redirect, Route } from "react-router-dom";

function AuthRoute ({ component: Component, ...rest }){

    const token = cookie.get('token');

    return(
        <Route
            {...rest}
            render={props =>
                // if there is token redirect to account route
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}
                    />
                )
            }

        />
    )
}

export default AuthRoute;