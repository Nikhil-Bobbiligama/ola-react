import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

import EditComponent from './EditComponent';

class AllPost extends Component {
    
    render() {
        // this.props.dispatch({
        //     type:'VIEW_POST',
        //     data:this.props.cla});
        // console.log(this.props.cla+"=========!!!");
        console.log("inallpost+"+ this.props.posts);
        return (
            
            <div>6+66666
                {/* <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                   
                    <div key={post.id}>
                    
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))} */}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
