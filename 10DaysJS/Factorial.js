function factorial(num) {
    return num ? num * factorial(num - 1) : 1;
}

let result = factorial(4);
console.log('result', result);