const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const heights = input[1].split(' ').map(Number);

// 높이별 화살의 개수를 저장하는 Map
const arrows = new Map();
let arrowCount = 0;

for (const height of heights) {
    if (arrows.get(height) > 0) {
        // 현재 높이에 화살이 있다면 화살을 사용
        arrows.set(height, arrows.get(height) - 1);
    } else {
        // 현재 높이에 화살이 없다면 새로운 화살 생성
        arrowCount++;
    }
    // 사용한 화살은 높이 - 1로 이동
    arrows.set(height - 1, (arrows.get(height - 1) || 0) + 1);
}

console.log(arrowCount);
