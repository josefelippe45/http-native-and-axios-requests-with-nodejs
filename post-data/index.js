const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let body = '';
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //read the form
        fs.readFile('./http-form.html', 'utf-8', (err, data) => {
            if (err) throw err;
            //write data to browser
            res.write(data);
            res.end();
        })
    } else if(req.method === 'POST'){
        //'data' event when the form is submitted
        //we append the data to body because the data is only available here
        req.on('data', (data)=>{
            //append the data to body
            body += data;
        });
        //event end of the req
        req.on('end', ()=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            //once we get the data we go to the callback function
            res.write(body, ()=>{
                res.end();
            })
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 ERROR, could not find the page')
    }
}).listen(3000);
console.log('server listening!')
