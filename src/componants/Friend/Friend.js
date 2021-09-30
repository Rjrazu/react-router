import React from 'react';

const Friend = (props) => {
    console.log(props)
    const { name, email, website } = props.friend;
    const frstyle = {
        border: "3px solid red"
    }
    return (
        <div style={frstyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{website}</p>

        </div>
    );
};

export default Friend;