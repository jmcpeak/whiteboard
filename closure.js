// A closure is the combination of a function and the
// lexical environment within which that function was declared.

const https = require('https');
let me = 'Bruce Wayne';

function greetMe() {
    console.log('Hello, ' + me + '!');
    // How do I access me even though it is outside the function?
    // Functions aren't just functions, they are also closures.
}

me = 'Batman';

greetMe();

// Why do we need them? good example
function sendRequest() {
    let requestId = 1;

    https.get('https://jsonplaceholder.typicode.com/posts/' + requestId, () => {
        console.log('Request ' + requestId + ' returned');
    });
}

sendRequest();
