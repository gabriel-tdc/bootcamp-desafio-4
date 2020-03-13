import React, { Component } from 'react';

import Comment from './Comment';

import img from '../assets/gabriel-tedeschi.jpg';

function Post() {
    return (
        <>
            <article>
                <img src={img} alt="Avatar"/>
                <p>
                    Júlio Alcantara<br/>
                    <time>04 Jun 2019</time>
                </p>


            </article>
        </>
    );
}

export default Post;