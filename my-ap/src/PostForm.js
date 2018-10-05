import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
class PostForm extends Component {
  constructor()
  {
    super();
    this.state={open:false,close:false};
  }
  add()
  {
    this.setState({open:true});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({open:false,close:true});
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing:false
    }
    this.props.dispatch({
      type:'ADD_POST',
      data});
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
render() {
return (
<div>
  <h1>Create Post</h1>
  <button onClick={this.add.bind(this)}>addd</button>
  <Modal open={this.state.open} onClose={ this.state.close}>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Post Title"/>
   <br /><br />
   <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
    placeholder="Enter Post" />
   <br /><br />
   <button>Post</button>
  </form></Modal>
</div>
);
}
}
export default connect()(PostForm);
