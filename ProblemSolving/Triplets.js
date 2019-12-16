let alice = [17,28,30];
let bob = [99,16,8];

let aliceWin = [];
let bobWin = [];
let noWin = [];
let finalScore = [];
for(let i= 0;i < alice.length; i++){
        if(alice[i] > bob[i]){
            aliceWin.push(alice[i])
        } else if(alice[i] < bob[i]) {
            bobWin.push(bob[i])
        } else {
            noWin.push(alice[i])
        }
}
finalScore = [aliceWin.length, bobWin.length]
console.log('aliceWin', aliceWin, 'bobWin', bobWin , 'noWin', noWin, 'finalScore', finalScore);
