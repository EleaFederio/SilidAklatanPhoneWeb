import React from 'react';
import { Redirect, Route } from "react-router-dom";
import {connect} from "react-redux";

function AuthRoute ({ component: Component, ...rest }){

    return(
        <Route
            {...rest}
            render={props =>
                // if there is token redirect to account route
                rest.loggedIn ? (
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

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps)(AuthRoute);