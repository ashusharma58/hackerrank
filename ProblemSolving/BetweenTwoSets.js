function getTotalX(a, b) {
    let validCount = 0;
    for(let x = 1; x <= 100; x++ ){
        if(a.every(item => (x % item == 0))){
            if(b.every(it => (it % x === 0))) {
                validCount++;
            }
        }
    } 
    return validCount;
}

let arr = [2,3];
let brr = [2,4];
let result = getTotalX(arr, brr);
console.log('result', result);
