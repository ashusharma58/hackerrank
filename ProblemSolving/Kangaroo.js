function kangaroo(x1, v1, x2, v2) {
    if(v1 > v2) {
        let remainder = (x1 - x2) % (v2 - v1);
        if(remainder == 0) {
            return 'YES'
        }
    }
    return 'NO'
}

 let result = kangaroo(0,3,4,2);
 console.log('result', result);