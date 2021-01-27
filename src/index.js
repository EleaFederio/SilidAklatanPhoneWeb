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

if(token){
    var nameArr = token.split('|');
    var studentId = nameArr[0];
    var studentData = {$id :  studentId}


    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', response => {
        console.log(response);
        console.log(studentData);
        axios.post('http://127.0.0.1:8000/api/login', studentData).then(res => {
            console.log(res.data)
            cookie.set('token', res.data.token);
            // set mapDispatchToProps->setLogin
            this.props.setLogin(res.data.student)
            this.props.history.push('/account');
        });
    } );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
