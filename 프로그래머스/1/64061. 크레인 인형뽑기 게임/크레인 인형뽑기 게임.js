// 위쪽부터 꺼낼 수 있음
//  연속한 인형은 사라짐 
// 인형이 없는곳에서 크레인하면 동작 안함
// 무브는 1000번까지 가능

// 무브를 순회함 특정 위치에서 인형을 꺼냄 (없으면 무동작) 
// 버킷에 넣음 넣고 크기가 2이상이며 상위와 차상위가 같다면 팝 두번 함 -> 팝의 행위를 카운트함


function solution(board, moves) {
    let count = 0; // 사라진 인형의 갯수
    const h = board.length
    const stack = []
    
    function draw(i){
        for(let j = 0;j<h;j++){
            if(board[j][i]===0){
                continue;
            }
            const temp = board[j][i]
            board[j][i] = 0
            return temp
        } 
        return null
    }
    
    function pushStack(doll){
        if(stack.length === 0){
            stack.push(doll)
        }else{
            if(stack[stack.length-1] === doll){
                stack.pop()
                count += 2
            }else{
                stack.push(doll)
            }
            
        }
    }
    
    for(let i of moves){
        const doll = draw(i-1)
        if(doll === null){
            continue;
        }
        pushStack(doll)
    }
    
    
    return count;
}