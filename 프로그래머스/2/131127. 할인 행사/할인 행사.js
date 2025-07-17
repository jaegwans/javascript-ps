// 회원 10일
// 할인제품 하루 하나 할인 하나 구매
// 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할떄 가입
// 회원등록하면 모두 할인받을수 있는 회원등록일 리턴
// discount 길이 10만 주의
// 일수는 항상 10일
// 디스카운트 목록을 10일 단위로 순회하면서 해쉬에 갯수로 담고
// 갯수만큼 차감해서 다 딱 0이 되면 count 
function solution(want, number, discount) {
    let count = 0
    const hash = {}
    
    for(let i = 0 ; i<discount.length-9; i++){
        const hash = {}
        let checkFlag = true
        for(let j = 0; j<10 ; j++){
            if(hash[discount[i+j]] ==undefined){
                hash[discount[i+j]] = 1
            }else{
                hash[discount[i+j]] = hash[discount[i+j]]+1
            }
        }
        for(let j = 0; j<want.length; j++){
            if(hash[want[j]]!==number[j]){
                checkFlag = false
            }
        }
        if(checkFlag){
            count++
        }
    }
    return count;
}