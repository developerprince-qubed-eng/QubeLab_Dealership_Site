const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

//setting middleware
app.use(express.static(__dirname + '/')); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'index.html'));
});

const port = process.env.PORT || 4500;

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));


