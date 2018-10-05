import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
var data1;


fetch('http://localhost:4000/departments', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
},
).then(respons => {
    console.log("responnsss"+respons);
    if (respons.ok) {
        respons.json().then(json => {
            console.log(json);
            data1 = json;
            
           
        });
    }
});

console.log(data1+"in index.js");
console.log(data1);
console.log("in index.jss");
ReactDOM.render(
<Provider store={store}>
<App classmee = {1} />
</Provider>, document.getElementById('root'));