function createString(str, k){
    let st = '';
    st = str.toString().repeat(k);
   return singleDigitSum(st)
}

function singleDigitSum(st) {
    if(st.length === 1) {
        return Number(st);
    } else {
        let sum = 0;
        for(const n of [...st]) sum += Number(n);
        sum = singleDigitSum(sum.toString());
        return sum
    }
   
  }
  function Test (n,k) {
      n = n.split("").reduce((acc,cur) => Number(acc) + Number(cur)) * k + "";
     return n.length > 1 ? Test(n,1) : n.charAt(0)
  }

  function superDigit(n, k) {     
    n = n.split("").reduce((a, b) => +a + +b) * k + "";
    return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
}
let result = superDigit("88", 2);

console.log('result', result);
