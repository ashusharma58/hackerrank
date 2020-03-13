const designer = (arr, str) => {
    let sortedStr = str.split('');
    console.log('sortedStr', sortedStr);
    
    let charInStr = str.length;
    let max = 0;
    for(let i = 0; i < charInStr; i++ ){
        if(max < arr[i] ){
            max = arr[i]
        }
    }
    
    return max * charInStr;
    
    
    }
    
    
    let arr = [1,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
    let str = 'zaba';
    
    let result = designer(arr, str);
    
    console.log('result', result);