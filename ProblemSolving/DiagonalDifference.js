let ar = new Array(3);
 ar = [[1,2,3], [4,5,6], [9,8,9]];
 let diagonal1 = 0;
 let diagonal2 = 0;
for(let row = 0; row < ar.length; row++){
    diagonal1 += ar[row][row];
    diagonal2 += ar[row][ar.length - row - 1];
    
}
let difference = Math.abs(diagonal1 - diagonal2)
console.log('ar', ar, 'diagonal1', diagonal1, 'diagonal2', diagonal2 ,'difference', difference );
