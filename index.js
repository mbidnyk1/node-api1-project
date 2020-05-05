const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [
    {
        id: 1,
        name: 'Corki',
        bio: 'Delivers packages'
    }
];

server.get('/', (req,res) => {
    res.json({ api: "It's alive!" })
});

server.get('/api/users', function(req,res) {
    res.status(200).json(users)
}) 

server.post('/api/users',function(req,res){
    const userInfo = req.body
    console.log({req})
    const {name, bio} = req.params
    users.push(userInfo)
    res.status(201).json(userInfo)
   
    
})

server.listen(5000, () => console.log('\n== API is up ==\n'));