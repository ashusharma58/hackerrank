function BirthdayChocolate(s,d,m) {
  let count = 0;
  for(let i = 0; i< s.length; i++){
      let sum = 0;
      for (let j = 0; j < m; j++) {
          sum = sum + s[i + j];
      }
      if(sum == d) {
          count ++;
      }
  }
  return count
}

let s = [2,2,1,3,2];
let d = 4;
let m = 2;
let result = BirthdayChocolate(s,d,m);
console.log('result', result + '\n');
