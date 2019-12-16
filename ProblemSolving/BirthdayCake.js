let arr = [3,1,2,3];
let age =  4;
// arr.sort();
// arr.reverse();
let max = 0;
for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

let maxArr = [];
 arr.filter(item =>  {
    if(item === max) maxArr.push(item);
})


console.log(max, maxArr);
