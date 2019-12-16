function BreakRecords (socres) {
    let highScore = [];
    let lowScore = [];
    let finalArr = [];
    let highScoreElement = socres[0];
    let lowScoreElement = socres[0];
    socres.forEach(element => {
        if(element > highScoreElement) {
            highScoreElement = element;
            highScore.push(element);
            
        }
        if(element < lowScoreElement) {
            lowScoreElement = element;
            lowScore.push(element);
        }
       
    });
    finalArr.push(highScore.length, lowScore.length)
   return finalArr;
}

let socres = [10,5,20, 20, 4, 5, 2, 25, 1];

let result = BreakRecords(socres);

console.log('result', result.join(' ') + '\n');
