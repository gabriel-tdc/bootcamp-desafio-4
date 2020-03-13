import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
    render() {
        return(
            <>
                <h1>PostList</h1>
                <Post/>
            </>
        );
    }
}

export default PostList;