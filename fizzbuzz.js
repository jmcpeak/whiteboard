'use strict';

const
    MIN = 1,
    MAX = 100,
    EMPTY = '',
    VALUES = {3: 'fizz', 5: 'buzz'};

for (let i = MIN; i <= MAX; i++) {
    let output = EMPTY;

    for (let value in VALUES)
        if (i % value === 0)
            output += VALUES[value];

    if (output === EMPTY)
        output = i;

    console.log(output);
}
