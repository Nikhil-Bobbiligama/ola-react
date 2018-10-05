import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        
          <hr />
          <Posts />
          <hr />
          <PostForm />
        </div>
        
      </Provider>
    );
  }
}

export default App;