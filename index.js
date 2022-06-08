const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is My Second Node.js Emon Projects')
})

const users = [
    { id: 1, name: 'emon', email: 'emon@gmail.com', phone: '01456859425' },
    { id: 2, name: 'sumon', email: 'sumon@gmail.com', phone: '01456859425' },
    { id: 3, name: 'siam', email: 'siam@gmail.com', phone: '01456859425' },
    { id: 4, name: 'rifat', email: 'rifat@gmail.com', phone: '01456859425' },
    { id: 5, name: 'shojib', email: 'shojib@gmail.com', phone: '01456859425' },
    { id: 6, name: 'sohag', email: 'sohag@gmail.com', phone: '01456859425' },
    { id: 7, name: 'tanvir', email: 'tanvir@gmail.com', phone: '01456859425' },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const serche = req.query.name.toLocaleLowerCase();
        const macthed = users.filter(user => user.name.toLocaleLowerCase().includes(serche));
        res.send(macthed)
    }
    else {
        res.send(users)
    }

})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.get('/user/:id', (req, res) => {
    const id = (req.params.id);
    const user = users.find(u => u.id === parseInt(id))
    res.send(user)
})
app.listen(port, () => {
    console.log(`Example For Port ${port}`);
})