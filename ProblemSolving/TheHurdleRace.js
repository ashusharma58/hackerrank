const hurdleRace = (arr, height) => {
let max = 0;
let diff = 0;
for(let i = 0; i <= arr.length; i++ ){
    if(max < arr[i] ){
        max = arr[i]
    }
}

if(max > 0 && max > height) {
diff = max - height;
}

return diff;


}


let arr = [2,5,4,5,2];
let height = 7;

let result = hurdleRace(arr, height);

console.log('result', result);
