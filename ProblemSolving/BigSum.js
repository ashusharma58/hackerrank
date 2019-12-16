let Arr = [100,200,300];
let Sum = 0;

for(let i = 0; i < Arr.length ; i++) {
    Sum+= Arr[i];
}
let Sum2 = Arr.reduce((acc,cur) => Number(acc) + Number(cur))
console.log('Sum', Sum,'Sum2' ,Sum2);
