import React from 'react';
import { Posts } from "../Posts";
import {CreatePost} from "../CreatePost";

const Content = () => {
    return (
        <div className="content">
            <div className="container container-content">
                <CreatePost/>
                <Posts />
            </div>
        </div>
    )
}

export default Content