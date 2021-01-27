import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookie from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import store from './store/index';

// get token from cookie
const token = cookie.get('token')
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
    axios.get('http://127.0.0.1:8000/api/student').then(res => {
        console.log(res.data)
        store.dispatch({
            // payload is dispatch to set the state in redux
            type: "SET_LOGIN",
            payload: res.data
        });
       render()
    });
}else {
    render()
}



