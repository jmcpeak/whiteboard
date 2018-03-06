const
    fetch = require('node-fetch'),
    url = 'https://jsonplaceholder.typicode.com/posts';


async function fetchPosts() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(response);
    console.log(data);
}

fetchPosts();

//     .then(response => {
//     response.json().then(() => console.log('fetch response: ', response.status));
// }).catch(error);
