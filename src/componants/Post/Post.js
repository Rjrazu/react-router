import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post
    const frstyle = {
        border: "3px solid red"
    }
    const history = useHistory()
    const handleClick = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div>
            <div style={frstyle}>
                <h2>{title}</h2>
                <Link to={`/post/${id}`}> <button>Post Details</button></Link> <br />
                <button onClick={handleClick}> Click Here For Details</button>

            </div>
        </div>
    );
};

export default Post;