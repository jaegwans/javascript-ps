// goal을 순회하여 카드들에서 하나를 빼기.
// 만약 둘다 없으면 return No
// goal을 모두 돌았으면 Yes
function solution(cards1, cards2, goal) {
    
    for(let i of goal){
        if(i === cards1[0]){
            cards1.shift()
            continue
        }
        if(i === cards2[0]){
            cards2.shift()
            continue
        }
        return 'No'
    }
    return 'Yes'
}