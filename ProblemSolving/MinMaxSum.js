let Arr = [1,2,3,4,5];
Arr.sort();
let min = 0;
let max = 0;
for(let i = 0; i < Arr.length - 1; i++){
    min+= Arr[i]
}
Arr.reverse();
for(let i = 0; i < Arr.length - 1; i++){
    max+= Arr[i]
}
console.log('min', min, 'max', max);
