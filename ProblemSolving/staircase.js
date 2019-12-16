function staircase (n) {
    let line = Array(n + 1).fill(' ');
    line[n] = '\n';
    for(let i = n - 1; i >=0; i-- ){
        line[i] = '#';
        process.stdout.write(line.join(''));
    }
}

staircase(6);