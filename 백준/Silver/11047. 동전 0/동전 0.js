// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 첫째 줄의 데이터를 공백 기준으로 나누기
const [n, k] = input[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i < n + 1; i++) {
    const item = Number(input[i]);
    arr.push(item);
}

arr.sort((a, b) => b - a);

let count = 0;
let nowK = k;

for (let i of arr) {
    if (i > nowK) {
        continue;
    }
    // while (nowK >= i) {
    //     nowK -= i;
    //     ++count;
    // }
    count += Math.floor(nowK / i);
    nowK = nowK % i;
    if (nowK === 0) break;
}

console.log(count);
