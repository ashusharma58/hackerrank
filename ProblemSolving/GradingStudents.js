function gradingStudents (grades) {
        let finalArr = [];
    grades.forEach((item) => {
        let remainder = item % 10;
        if(item >= 38) {
            if(remainder < 5 && 5 - remainder < 3 ){
                let addOn = 5- remainder;
                let addOnPlus = item + addOn;
                finalArr.push(addOnPlus) 
            }
          else  if (remainder > 5 && 10 - remainder < 3) {
                let addOn = 10 - remainder;
                let addOnPlus = item + addOn;
                finalArr.push(addOnPlus) 
            } else {
                finalArr.push(item)
            }

        } else {
               finalArr.push(item)
            }
    })
    return finalArr;
}

let arr = [73,67,38,33]
let result = gradingStudents(arr);

console.log('result', result);
