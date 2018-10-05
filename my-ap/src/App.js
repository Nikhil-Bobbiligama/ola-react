
import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

var data1;
class App extends Component {
  constructor()
  {
    super();
    this.state={x: 1,departments:[]}
  }
 
 
  render() {
    let v=this.props.classmee+this.state.x ;
    v++;
   //this.setState({ x:this.props.classmee+this.state.x}); 
    console.log(this.props.classmee+"       "+v);
    let f= String(v);
    return (
    <div className="App">
       
        <AllPost  />
        <PostForm />
    </div>
    );
    }
  }
export default App;