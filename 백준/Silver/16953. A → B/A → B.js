// 이동경로가 단하나 -> 그리디 알고리즘

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// *2 or *10,+1 // 연산 최소 갯수

// 반대로 말하면 /2, /10,-1
let [a, b] = input[0].split(' ').map(Number);

let count = 0;

while (a < b) {
    if (b % 2 === 0) {
        b = b/2
        count++;
    }else if((b-1)%10 === 0 ){
        b =(b-1)/10
        count++;
    }else{
        break;
    }
}

if (a === b) {
    console.log(count + 1);
} else {
    console.log(-1);
}
