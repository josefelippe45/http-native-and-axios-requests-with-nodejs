const http = require('http');
//createServer is where the listener will be. the function will be evoked every time there is a request
//req is the request that's being sent to the server
const server = http.createServer((req, res)=>{
    //200 is the status code that means 'ok'. the second is what we want, we want to set something to the header
    //Content-Type is pre-build
    res.writeHead(200, {'Content-Type': 'text/html'});

    //response we are sending.
    res.end('<h1>Works</h1>');
});
const PORT = 3000;
//listening is some port
server.listen(PORT);
console.log(`listening on ${PORT}`);