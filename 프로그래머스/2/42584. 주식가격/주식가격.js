// 해당 초 시점부터 뒤로 가격이 유지되거나 오른 기간 리턴 
// 해당 초 시점부보다 작은 수가 나오는 지점 (더 떨어진 초 인덱스 - 해당 초 인덱스)
// 포문 돔, 해당 지점에서부터 이중 포문 돔
// 더 떨어지는 지점 발견하면 연산해서 앤서 에 넣음 . 끝까지 가면 마지막 인덱스 - 해당 인덱스 

function solution(prices) {
    const p = prices
    
    var answer = [];
    for(let i = 0; i<p.length ; i++){
        for(let j = i+1 ;j<p.length; j++){

            if(p[i]>p[j]){
                answer.push(j-i)
                break;
            }
            if(j===p.length-1){
                answer.push(j-i)
            }
        }
    }
    
    answer.push(0)
    
    return answer;
}