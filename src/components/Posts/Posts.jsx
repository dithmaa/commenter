import React from 'react';

import {Post} from './Post/';

import './Posts.scss';


const Posts = () => {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts