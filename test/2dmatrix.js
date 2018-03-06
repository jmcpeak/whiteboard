// From https://www.qualified.io/ (EMS Linq)
/**
 You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

 For Example

 - 3x3 matrix
 - [1 2 3]  [7 4 1]
 - [4 5 6]  [8 5 2]
 - [7 8 9]  [9 6 3]

 - 4x3 matrix
 - [1  2  3  4]  [ 9 5 1]
 - [5  6  7  8]  [10 6 2]
 - [9 10 11 12]  [11 7 3]
 -               [12 8 4]

 - 3x4 matrix
 - [ 1  2  3]  [10 7 4 1]
 - [ 4  5  6]  [11 8 5 2]
 - [ 7  8  9]  [12 9 6 3]
 - [10 11 12]

 */
const rotateImage = a => {
    let column = 0,
        rows = a[0],
        retVal = [];

    rows.forEach(() => {
        let rotatedRow = [];

        for (let i = a.length - 1; i >= 0; i--)
            rotatedRow.push(a[i][column]);

        column++;

        retVal.push(rotatedRow);
    });

    return retVal;
};

// These are optional test cases that are shown to the candidate, to help them get started.
// Usually these are just the first few basic tests of your full test suite.
// Click [VALIDATE EXAMPLE TEST CASES] above to see the output from running against these tests.
let assert = require('chai').assert;

describe('Code Challenge 3x3 matrix', function () {
    it('should be equal', function () {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const r = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

        assert.deepEqual(rotateImage(a), r);
    });
});

describe('Code Challenge 3x4 matrix', function () {
    it('should be equal', function () {
        const a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
        const r = [[9, 5, 1], [10, 6, 2], [11, 7, 3], [12, 8, 4]];

        assert.deepEqual(rotateImage(a), r);
    });
});

describe('Code Challenge 4x3 matrix', function () {
    it('should be equal', function () {
        const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
        const r = [[10, 7, 4, 1], [11, 8, 5, 2], [12, 9, 6, 3]];

        assert.deepEqual(rotateImage(a), r);
    });
});
