import React from 'react';

import { UserArea } from "../../UserArea";

import './Post.scss';


const Post = () => {
    return (
        <div className="post">
            <UserArea />
            <h4 className="post__title">
                Post title 3
            </h4>
            <p className="post__text">
                Lorem ipsum fish text some water and dust for fill some
                space in the template
            </p>
        </div>
    )
}

export default Post