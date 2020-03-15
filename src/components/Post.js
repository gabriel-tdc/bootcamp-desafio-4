import React, { Component } from 'react';
import Parser from 'html-react-parser';

import Comment from './Comment';

function Post({data}) {
    let commentBreak;

    if(data.comments){
        commentBreak = Parser('<hr/>');
    } else {
        commentBreak = '';
    }
    return (
        <>
            <article>
                <div className="postHeader">
                    <img src={data.author.avatar} alt="Avatar"/>
                    <p>
                        <b>{data.author.name}</b><br/>
                        <time>{data.date}</time>
                    </p>
                </div>

                <p>
                    {data.content}
                </p>

                {commentBreak}

                {
                    data.comments &&
                    data.comments.map(
                        comments => <Comment key={comments.id} data={comments} />
                    )
                }
                
            </article>
        </>
    );
}

export default Post;