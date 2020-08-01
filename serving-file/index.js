const http = require('http');
const fs= require('fs');

const server = http.createServer((req, res)=>{
    //condition to readFile
    if (req.url === '/'){
        fs.readFile('./data.html', 'UTF-8', (err,data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else{
        //if we can't find the file
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Error. Could not find your data');
    };
}).listen(3000)