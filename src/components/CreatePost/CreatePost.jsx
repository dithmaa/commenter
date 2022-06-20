import React from 'react';
import './CreatePost.scss';

const CreatePost = () => {
    return (
        <form className="create-post">
            <textarea placeholder="Type some text ..." name="create-post" id="create-post" cols="30" rows="10" className="main-textarea"></textarea>
            <button className="main-btn">Post</button>
        </form>
    )
}

export default CreatePost;