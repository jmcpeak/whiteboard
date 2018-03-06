const
    fetch = require('node-fetch'),
    https = require('https'),
    axios = require('axios'),
    error = (e) => console.log('---> error: ', e),
    url = 'https://jsonplaceholder.typicode.com/posts/';


https.get(url, (response) => {
    console.log('https response:', response.statusCode);
    response.on('data', () => {});
});

fetch(url).then(response => {
    response.json().then(() => console.log('fetch response: ', response.status));
}).catch(error);

axios.get(url).then(response => {
    console.log('axios response: ', response.status)
}).catch(error);
