const CatAndMouse = (x, y, z) =>{
let winA = Math.abs(z - x);
let winB = Math.abs(z - y);
let result = '';
if(winA < winB ){
result = 'Cat A'
} else if(winB < winA) {
    result = 'Cat B'
} else if(winA === winB) {
    result = 'Mouse C'
}
return result;
}

let finalResult = CatAndMouse(2,5,4);
console.log('finalResult', finalResult);
