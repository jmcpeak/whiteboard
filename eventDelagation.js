'use strict'; - // https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/

/**
 * Event bubbling
 *
 * UL - put event delegate here
 *   LI
 *       A - it will see a click here
 *
 */

(function foo() {
    // IIFE
    console.log(foo);
})();

//console.log(foo);

// Why don't we use the global scope in JS?
// Because you can't predict the future

function f(input) {
    if (input) {
        name = 'bob';
    } else {
        name = 'tom';
    }

    var name;

    return name;
}

const v = null;

console.log(typeof v);

// css reseting
