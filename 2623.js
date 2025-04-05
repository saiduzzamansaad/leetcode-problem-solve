function memoize(fn) {
    const cache = {};
    let callCount = 0;

    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            callCount++;
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Example functions
function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return factorial(n - 1) * n;
}

// Example usage
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // 4, call count becomes 1
console.log(memoizedSum(2, 2)); // 4, from cache, call count remains 1
console.log(memoizedSum(1, 2)); // 3, call count becomes 2