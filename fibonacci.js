/**
 * Fn = Fn-1 + Fn-2 (formula)
 * F0 = 0 and F1 = 1 (seed values)
 *
 *              0  1  2  3  4  5  6   7   8   9  10  11
 * fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
 */
const
    {performance} = require('perf_hooks'),
    run = position => {
        let whileTime,
            recursiveTime;

        // subroutine using while
        {
            let start = performance.now(),
                calculate = () => {
                    let number = 1,
                        secondLast = 0,
                        last = 1,
                        current = 2;

                    while (current <= position) {
                        number = secondLast + last;
                        secondLast = last;
                        last = number;
                        current++;
                    }

                    return number;
                };

            console.log(`Performance with a ${position < 100 ? 'small' : 'large'} fibonacci number...`);
            console.log(`    fibonacci (while) number at position ${position} is ${calculate(position)}`);
            whileTime = performance.now() - start;
            console.log(`        time: ${whileTime}ms`);
        }

        // subroutine using recursion
        {
            let start = performance.now(),
                calculate = () => {
                    let cache = [],
                        recurse = position => {
                            if (!cache[position]) {
                                if (position < 2)
                                    cache[position] = position;
                                else
                                    cache[position] = recurse(position - 1) + recurse(position - 2);
                            }

                            return cache[position];
                        };

                    return recurse(position);
                };

            console.log(`    fibonacci (recursive) number at position ${position} is ${calculate(position)}`);
            recursiveTime = performance.now() - start;
            console.log(`        time: ${recursiveTime}ms`);
        }

        const difference = ((whileTime - recursiveTime) / recursiveTime) * 100;
        console.log('------------------------------------------------------');
        console.log(`recursive is ${difference > 0 ? 'faster' : 'slower'} by ${Math.ceil(difference / 10) * 10}%\r\n`);
    };

// watch the difference by commenting out the next line
console.log('\r\nfibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...]\r\n');
run(10);
run(1000);
