let pairFound = false;
let pairValue = Number.MIN_VALUE;
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let ans, i, j, n, x = 0;
let numCount = [];

function onlyUnique (value, index, self) {
    return self.indexOf(value) === index;
}

var setsOfMatches = {};
arr.forEach(function(currentItem) {
    var firstLetter = [currentItem];
    if (setsOfMatches[firstLetter]) {                 //If we have a set for this letter already
        setsOfMatches[firstLetter].push(currentItem); //Add this item to it
    } else {                                          
    	setsOfMatches[firstLetter] = [currentItem];   //Create the set
    }
});

console.log(setsOfMatches);
//{  
//   A:["A1","A2"],
//   B:["B5","B7"],
//   C:["C6","C4"]
//}

//Iterate through the sets of matches
for (var set in setsOfMatches) {
    if(setsOfMatches[set].length % 2 === 0) {
        console.log('iski esi taisi', setsOfMatches[set]);
    }
    console.log("Set " + set + ": " +  setsOfMatches[set] );
}

// arr.sort();
// console.log("Sorted array : " + arr);
// for (i=0; i < arr.length -1; i++) // Only running till length/2 since there is always another match hence don't need to run through all the length probably
// {
//          if(arr[i] == arr[i+1])
//            {
//              j=arr.length; //This is done to end the inner loop
//               console.log("Match found : " + arr[i]);
//              //if the matching element is found, ideally the i loop should ignore this record. I don't know how to do this.
//            }
//  }

// let unique = arr.filter(onlyUnique);
// console.log('unique', unique);

// for(i = 0; i < arr.length; i++){
//     x = arr[i];
//     let sameValueArr = arr.filter((item) => {
//                 item === arr[i] ? 'hey' : 'bye'
//     })
//     console.log('value of x', x, sameValueArr);
//     // for(j = 0; j < unique.length; j++) {
//     //    if( arr.indexOf(i) === unique.indexOf(j) ){
//     //      console.log('pair Found');
//     //     //    numCount.push(arr[j])
//     //     //    numCount.push(x);
//     //    }

//     // //    console.log('numCount', numCount);
       
        
//     // }
   
//     // ans = arr[i]/2;
//     // console.log('ans is ', ans);
    
// }

// function countPairs (arr, n) { 
//     let ans = 0; 
  
//     // for each index i and j 
//     for (let i = 0; i < n; i++) {
//         for (let j = i+1; j < n; j++) {
//  // finding the index with same 
//         // value but different index. 
//         if (arr[i] === arr[j]) {
//             console.log('in if',arr[i], arr[j] );
            
//             ans = ans + 1; 
//         }
//         }
//     }
        
                
//     return ans; 
// } 

// function main (){ 
//     let Arr = [1, 1,,2]
//     let n = Arr.length; 
//       console.log(countPairs(Arr, n));
// } 

// main();