let Arr = [-4, 3, -9, 0, 4, 1 ];
let items = Arr.length;

let positive = [];
let negative = [];
let zeros = [];
let Avg = [];

for(let i = 0; i < Arr.length; i++) {
    switch(Math.sign(Arr[i])){
        case 1:
            positive.push(Arr[i]);
        break;
        case -1:
            negative.push(Arr[i]);
        break;
        default:
                zeros.push(Arr[i]);
    }

}
Avg.push(positive.length/items,negative.length/items, zeros.length/items )
Avg.forEach(item => {
    console.log(item.toFixed(6));
    
})

console.log('positive',positive, 'negative', negative, 'zeros', zeros, 'Avg', Avg);
