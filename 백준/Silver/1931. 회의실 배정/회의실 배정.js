const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10); // 회의 개수
const meetings = input.slice(1).map(line => line.split(' ').map(Number));

// 종료 시간 기준 오름차순 정렬, 종료 시간이 같으면 시작 시간 기준 정렬
meetings.sort((a, b) => {
    if (a[1] === b[1]) { // 같을 시 두번쨰 정렬조건
        //"회의의 시작시간과 끝나는 시간이 같을 수도 있다"
        return a[0] - b[0]; // 종료 시간이 같으면 시작 시간 기준 정렬
    }
    return a[1] - b[1]; // 종료 시간 기준 정렬
});



let count = 0; // 배정된 회의 개수
let lastEndTime = 0; // 가장 최근에 선택된 회의의 종료 시간

for (const [start, end] of meetings) {
    if (start >= lastEndTime) { // 회의가 겹치지 않으면 선택
        count++;
        lastEndTime = end;
    }
}

console.log(count);
