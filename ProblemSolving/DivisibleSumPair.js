function divisibleSumPairs(n, k, ar) {
    let result = 0;
    // ar.forEach((element1, index1) => {
    //     ar.forEach((element2, index2) => {
    //         if(((element1 + element2) % k === 0)  && (index1 < index2)) {
    //             console.log(element1, element2);
                
    //             result = result + 1
    //         }
    //     })
    // });
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
         if((ar[i] + ar[j]) % k === 0 && (i < j)){
             result = result + 1
         }
        }
    }
    return result;
}

let ar = [1, 3, 2, 6, 1, 2];
let result = divisibleSumPairs(6,3, ar );

console.log('result', result);
