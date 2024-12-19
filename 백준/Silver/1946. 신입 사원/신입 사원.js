// 코드를 작성해주세요
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//서류,면접중 적어도 하나가 다른 지원자보다 높아야함
// 2~6,7~14
const T = parseInt(input[0], 10); // 테스트 케이스 개수
let idx = 1; // 입력 데이터의 시작 인덱스
const testCases = []; // 테스트 케이스를 저장할 배열

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx], 10); // 지원자의 수
    idx++;

    const applicants = []; // 현재 테스트 케이스의 지원자 데이터 저장

    for (let i = 0; i < N; i++) {
        const [a, b] = input[idx].split(' ').map(Number); // 서류심사 순위와 면접 순위
        applicants.push([a, b]);
        idx++;
    }

    testCases.push(applicants);
}
// 다른 모든 지원자와 비교했을때 둘중 하나라도 나으면 -> 둘다 떨어지면 선발하지 않는다.




const results = [];

// 테스트 케이스를 순회하며 선발 논리 적용
for (const applicants of testCases) {
    // 서류 순위를 기준으로 오름차순 정렬
    applicants.sort((a, b) => a[0] - b[0]);

    let count = 1; // 첫 번째 지원자는 무조건 선발
    let minInterviewRank = applicants[0][1]; // 첫 지원자의 면접 순위

    // 두 번째 지원자부터 비교 시작
    for (let i = 1; i < applicants.length; i++) {
        if (applicants[i][1] < minInterviewRank) {
            count++; // 선발
            minInterviewRank = applicants[i][1]; // 면접 순위 갱신
        }
    }

    results.push(count); // 현재 테스트 케이스 결과 저장
}

// 결과 출력
console.log(results.join('\n'));