// From https://www.qualified.io/ (EMS Linq)

/**
 Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

 Example
 For a = [2, 3, 3, 1, 5, 2], the output should be
 firstDuplicate(a) = 3.

 There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than than second occurrence
 of 2 does, so the answer is 3.

 For a = [2, 4, 3, 5, 1], the output should be
 firstDuplicate(a) = -1.

 Note:
 The optimal solution has O(n) time complexity and O(1) additional space complexity - bonus points if you come
 up with it!
 */
const firstDuplicate = a => {
    let retVal = -1,
        duplicatePositions = {};

    // use every because it allows me to breakout by returning false
    a.every(number => {
        if (duplicatePositions[number]) {
            retVal = number;
            // we can break - we found our first duplicate
            return false;
        } else {
            duplicatePositions[number] = true;
            return true;
        }
    });

    return retVal;
};

// These are optional test cases that are shown to the candidate, to help them get started.
// Usually these are just the first few basic tests of your full test suite.
// Click [VALIDATE EXAMPLE TEST CASES] above to see the output from running against these tests.
const assert = require('chai').assert;

describe('Code Challenge duplicate: 2', function () {
    it('should be equal', function () {
        assert.equal(firstDuplicate([2, 3, 1, 5, 2]), 2);
    });
});

describe('Code Challenge duplicate: 3', function () {
    it('should be equal', function () {
        assert.equal(firstDuplicate([2, 3, 3, 1, 5, 2]), 3);
    });
});

describe('Code Challenge duplicate: 5', function () {
    it('should be equal', function () {
        assert.equal(firstDuplicate([5, 5, 6, 6]), 5);
    });
});

describe('Code Challenge duplicate: -1', function () {
    it('should be equal', function () {
        assert.equal(firstDuplicate([1, 2, 3, 4, 5]), -1);
    });
});
