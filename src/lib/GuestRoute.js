import React from 'react';
import { Redirect, Route } from "react-router-dom";
import {connect} from "react-redux";

function GuestRoute ({ component: Component, ...rest }){

    return(
        <Route
            {...rest}
            render={props =>
                // if there is token redirect to account
                !rest.loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/account',
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

export default connect(mapStateToProps)(GuestRoute);