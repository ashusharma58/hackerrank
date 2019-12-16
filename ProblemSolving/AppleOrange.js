function countApplesAndOranges(s, t, a, b, apples, oranges) {
 let finalApplesArr = [];
 let finalOrangesArr = [];
 let finalApples = addingValues(a, apples);
 let finalOranges = addingValues(b, oranges);
     
     finalApples.forEach((item) => {
         if(item >=s && item <=t ){
            finalApplesArr.push(item)
         }
     }) 
     finalOranges.forEach((item) => {
        if(item >=s && item <=t ){
            finalOrangesArr.push(item)
        }
    }) 
     finalArr.push(finalApplesArr.length, finalOrangesArr.length);
     finalArr.forEach(item => {
         console.log(item);
         
     })
}

function addingValues (a, arr) {
    let finalArr = [];
    for(let i = 0; i< arr.length; i++){
        return finalArr.push(a + arr[i])
    }
}

let apples = [2,3,-4];
let oranges = [3,-2,-4];
 countApplesAndOranges(7,10, 4,12, apples, oranges);
