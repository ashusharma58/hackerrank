function bonAppetit(bill,k,b) {
    let result;
   let total = bill.reduce((acc,cur) => Number(acc) + Number(cur));
   let payableAmount = (total - bill[k])/2;
    let overCharged = b - payableAmount > 0 ? true : false;
    result = overCharged ?  b- payableAmount : 'Bon Appetit';
    return result;
}

let bill = [3,10,2,9]

let result = bonAppetit(bill, 1, 7);

console.log('result', result);
