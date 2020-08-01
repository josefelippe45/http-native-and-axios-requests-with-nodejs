//https instead of http 'cause we are getting data from a https host
const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

const server = http.createServer((req, serverRes) => {
    //check the req. we only want GET
    if (req.method === 'GET' && req.url === '/posts') {
        https.get(url, httpRes => {
            //listener
            httpRes.on('data', data => {
                // set type of data
                httpRes.setEncoding('utf-8');
                serverRes.write(data);
            });
            //end event
            httpRes.on('end', ()=>{
                serverRes.end();
                console.log('done!');
            });
        })
    }else{
        //if we dont get to the route
        serverRes.writeHead(404, {'Content-Type': 'text/plain'});
        serverRes.end('404 ERROR');
    }
}).listen(3000);

console.log('Server running');