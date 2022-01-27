import express from 'express'
import cors from 'cors'


app.use(cors())
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000



var posts = [
    { text: "some post 0" },
    { text: "some post 1" },
    { text: "some post 2" }
];


app.get('/post/:id', (req, res) => {

    const id = Number(req.params.id);

    res.send(posts[id]);
})
app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/post', (req, res) => {

    posts.push(req.body);

    res.send(`your post is saved 🥳 now we have ${posts.length} posts`)
})
app.put('/post', (req, res) => {
    res.send('I am Express.js server')
})
app.delete('/post', (req, res) => {
    res.send('I am Express.js server')
})


app.listen(PORT, () => {
    console.log(`Hello server is listening at http://localhost:${PORT}`)
})
