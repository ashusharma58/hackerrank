function pageCount(n, p) {
    const pageFromStart = Math.floor(p/2);
    const pageFromEnd = Math.ceil(((n % 2 !== 0 ? n - 1 : n) - p)/2);
    return Math.min(pageFromStart, pageFromEnd);
}

let result = pageCount(6,2)

console.log('result', result);

