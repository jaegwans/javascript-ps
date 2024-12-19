const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10); // 도시의 수
const distances = input[1].split(' ').map(BigInt); // 도시 간 거리
const prices = input[2].split(' ').map(BigInt); // 주유소의 리터당 가격

let minPrice = prices[0]; // 첫 도시의 주유 가격
let totalCost = BigInt(0) // 총 비용

for (let i = 0; i < N - 1; i++) {
    totalCost += minPrice * distances[i]; // 현재 최소 가격으로 이동 거리 주유
    if (prices[i + 1] < minPrice) {
        minPrice = prices[i + 1]; // 최소 가격 갱신
    }
}

// 최소 가격이 갱신되지 않으면 가격을 유지하며 간선 곱 누적합을 반복함

console.log(totalCost.toString());
