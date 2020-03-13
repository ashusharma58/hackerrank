const valleyCounter = (n, s) => {
   let data=  s.split('');
    let level = 0;
    let valleys = 0;
    for(direction of data){
        if(direction === 'U') {
            level +=1
            if(level === 0){
                valleys += 1
            }
        } else {
            level -= 1
        }
        
    }
return valleys
}

let result = valleyCounter(8,'UDDDUDUU');

console.log('result', result);
