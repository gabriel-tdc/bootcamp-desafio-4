import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {

    state = {
        posts: [
            {
              id: 1,
              author: {
                name: "Gabriel Tedeschi",
                avatar: "https://avatars2.githubusercontent.com/u/12170214?s=460&u=310bf8437112e32b7d7023d74b8c1c9917e21965&v=4"
              },
              date: "15 Fev 2020",
              content: "Pessoal, alguém conhece algo mais bonito que o React?",
              comments: [
                {
                  id: 1,
                  author: {
                    name: "Jonatas Felipe",
                    avatar: "https://avatars1.githubusercontent.com/u/46595834?s=460&u=a2d29fa21c19fd3b600c596cf912ffef67e828a0&v=4"
                  },
                  content: "Cara, você já viu o NodeJS?"
                },
                {
                  id: 2,
                  author: {
                    name: "Diego Fernandes",
                    avatar: "https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
                  },
                  content: "Cara, você já viu o TDD?"
                },
              ]
            },
            {
              id: 2,
              author: {
                name: "Gabriel Tedeschi",
                avatar: "https://avatars2.githubusercontent.com/u/12170214?s=460&u=310bf8437112e32b7d7023d74b8c1c9917e21965&v=4"
              },
              date: "28 Jan 2020",
              content: "Começando o curso da Rocket Seat :)",
              
            }

        ]
    };

    render() {
        return(
            <>
                {this.state.posts.map(
                    post => <Post key={post.id} data={post} />
                )}
            </>
        );
    }
}

export default PostList;