// 승리한다면 다음 라운드에서 1,2 -> 1 , 3,4 -> 2 , 5,6 -> 3 
// 절반하고 올림 하고 인접한지 확인
function solution(n,a,b)
{
    const arr = [a,b]
    arr.sort((a,b)=>a-b) // 오름차
    let [a1,b1] = arr
    let count = 1
    
    while(true){
        if(b1%2 === 0 && Math.abs(a1-b1)===1){
            break;
        }
        a1 = Math.ceil(a1/2)
        b1 = Math.ceil(b1/2)
        count++
    }



    return count;
}