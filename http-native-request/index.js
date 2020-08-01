//http request without third part library. the 's' means security
const https = require('https');
const fs = require('fs');
//website that we are making the request
const url = 'https://jsonplaceholder.typicode.com/posts';
//second parameter is the response
https.get(url, res => {
    res.setEncoding('utf8');
    let body = '';
    //listener
    res.on('data', data => {
        //concatenate the body with the data from the on method
        body += data;
    });
    //when the data is done. uses a callback
    res.on('end', () => {
        //FROM LINE 18 TO 21 EXECUTE AFTER YOU ALREADY CREATED THE DATA.JSON FILE
        // //parse the data into objects
        // body = JSON.parse(body);
        // //display the data. because the data is in a array the [0] means that we are getting data from the position 0.
        // console.log(`${body[0].title}`);
        //creating a file where we get all the data in json format
        fs.writeFile('data.json', body, 'utf8', (err) => {
            if (err) throw err;
            console.log('success. pulled the post and created the file ');
        });
    });
});