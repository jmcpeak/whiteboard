// From https://www.qualified.io/ (EMS Linq)
/**
 Check if all digits of the given integer are even.

 Example
 For n = 248622, the output should be
 evenDigitsOnly(n) = true

 For n = 642386, the output should be
 evenDigitsOnly(n) = false
 */
const evenDigitsOnly = n => {
    let retVal = false;

    if (n && typeof n === 'number') {
        let numAsString = n.toString();

        retVal = true;

        for (let i = 0; i < numAsString.length; i++) {
            let num = numAsString[i];

            if (num % 2 !== 0)
                retVal = false;
        }
    }

    return retVal;
};

// These are optional test cases that are shown to the candidate, to help them get started.
// Usually these are just the first few basic tests of your full test suite.
// Click [VALIDATE EXAMPLE TEST CASES] above to see the output from running against these tests.
const assert = require('chai').assert;

describe('Code Challenge evenDigits', function() {
    it('should be equal', function() {
        assert.equal(evenDigitsOnly(22), true)
    });

    it('should be equal', function() {
        assert.equal(evenDigitsOnly(248622), true)
    });

    it('should be equal', function() {
        assert.equal(evenDigitsOnly(642386), false)
    });

});
