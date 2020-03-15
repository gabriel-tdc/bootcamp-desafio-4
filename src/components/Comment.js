import React, { Component } from 'react';

function Comment({data}){
    return (
        <>

            <div className="comment">
                <img src={data.author.avatar} alt="Avatar"/>
                <p><b>{data.author.name}</b> {data.content}</p>
            </div>
        </>
    );
}

export default Comment;