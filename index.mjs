import express from 'express'
import cors from 'cors'


const app = express()

app.use(cors())
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
app.put('/post/:id', (req, res) => {

    const id = Number(req.params.id);
    posts[id] = req.body;
    res.send(`Value update at ${id}`)
})
app.delete('/post/:id', (req, res) => {

    const id = Number(req.params.id);
    posts.splice(id, 1);
    res.send('Requested element is deleted')
})


app.listen(PORT, () => {
    console.log(`Hello server is listening at http://localhost:${PORT}`)
})
