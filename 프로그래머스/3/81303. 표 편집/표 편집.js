//C: 삭제한후 그 아래행을 선택하는데 만약 마지막이면 윗행 선택
//Z: 삭제한걸 복구하나 원래 선택되어있는건 유지함

// 표 행 갯수 n 처음선택된 정수 k 

// 제거시 떙기고 복원시 복구까지
// n크기 배열 생성 하고 내용물은 "O", "X" 
// 일단 n크기 배열 만듬, k 기준으로 cmd 돌림
// 각 cmd마다 명령 설정 
// 이동시 딜리트된건 뺴고 더 이동하도록 설정 // 벗어나는 이동 입력은 없음 //벗어나는 Z도 없음
// 제거 될 시 스택에 넣고 복구시 스텍에서 뺌

function solution(n, k, cmd) {
    const stack= []
    let now = k
    const prev = new Array(n).fill(0).map((_,i)=> i-1)
    const next = new Array(n).fill(0).map((_,i)=> i+1)
    let alive = Array(n).fill(true);

    for(let i of cmd){
        if(i.startsWith("U")){
            const x = Number(i.split(' ')[1])
            for(let j = 0; j < x; j++) now = prev[now];
        }
        if(i.startsWith("D")){
            const x = Number(i.split(' ')[1])
            for(let j = 0; j < x; j++) now = next[now];
        }
        if(i === "C"){
            stack.push(now)
            alive[now] = false;
            const prevV = prev[now], nextV = next[now];
            if(next[now]===n){
                now = prevV
            }else{
                now = nextV
            }
            if(prevV !== -1) next[prevV] = nextV;
            if(nextV !== n) prev[nextV] = prevV;
        }
        if(i.startsWith("Z")){
            const revive = stack.pop()
            alive[revive] = true;
            if (prev[revive] !== -1) next[prev[revive]] = revive;
            if (next[revive] !== n) prev[next[revive]] = revive;
        }
    }
    return alive.map(i => i ? 'O' : 'X').join('');
}
