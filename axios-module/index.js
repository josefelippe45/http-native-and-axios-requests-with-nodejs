const axios = require('axios');
let username= 'josefelippe45';

//then is a promise like an information that we are promised to get back
//here we get the information of the user
axios.get('https://api.github.com/users/' + username).then((res)=>{
    //we can access the properties of this object like res.data.followers
    console.log(res.data);
});
