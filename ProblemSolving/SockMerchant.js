function sockMerchant(n, ar) {
    let pairs = 0;
    ar.sort();
    for(let i = 0; i<n; i++){
        if(ar[i] === ar[i+1]){
                pairs++
                i++
        }
    }
return pairs
    
}

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

let result = sockMerchant(n, ar);

console.log('result', result);
