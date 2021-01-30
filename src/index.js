import {axios} from './lib/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookie from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
// import jwt from 'jsonwebtoken';
import store from './store/index';

// get token from cookie
let token = cookie.get('token')
console.log(token);
// add token as bearer token for authorization
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        ,
        document.getElementById('root')
    );
}

if(token){
    // this is to check if token is valid then return the user who owns the token
    axios.get('/api/student').then(res => {
        // console.log(res.data)
        store.dispatch({
            // payload is dispatch to set the state in redux
            type: "SET_LOGIN",
            payload: res.data
        });
       render()
    })
        .catch(error => {
            if(error.response.status === 401){
                cookie.remove("token");
                token = null;
                render();
            }
        });
}else {
    render()
}



