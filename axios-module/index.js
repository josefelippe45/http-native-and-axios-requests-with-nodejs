const axios = require('axios');
let username= 'josefelippe45';

//then is a promise like an information that we are promised to get back
axios.get('https://api.github.com/users/' + username).then((res)=>{
    console.log(res.data);
});
