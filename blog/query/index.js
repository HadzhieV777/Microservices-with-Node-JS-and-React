const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/events', (req, res) => {
    const { tyep, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };

    };

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];

        post.comments.push({ id, content })
    };
    
    res.send({});
});

app.listen(4002, () => {
    console.log('Server is listening on port 4002...')
}
);