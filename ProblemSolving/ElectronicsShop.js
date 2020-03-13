const getMoneySpent = (b, keyboards, drives) => {
    let keyb = [4]
    let dri =  [5]
    let tmpArr = [];
     keyb.forEach(item => {
         dri.forEach(item2 => {
             if((item + item2) > b ) return -1;
             if((item + item2) <= b){
                 tmpArr.push(item + item2)
             }
         })
     })
     tmpArr.reverse();
     console.log(tmpArr);
     return tmpArr.length ?  tmpArr[0] : -1
     
    // for(let k = 0; k <= keyb.length; k++){
    //     for(let d = 0; d<= dri.length; d++){
    //         if(keyb[k] + dri[d] > b) return -1;
    //         if((keyb[k] + dri[d]) <= b){
    //             tmpArr.push(keyb[k]+dri[d]);
                
    //             console.log('tmpArr', tmpArr);
    // tmpArr.reverse();
   
    //         }
    //     }
    // }
    // return tmpArr[0];
    
}

let result = getMoneySpent(5,1,1);

console.log('result', result);
