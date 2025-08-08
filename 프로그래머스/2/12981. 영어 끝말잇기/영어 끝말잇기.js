// 이전 단어 사용 불가
// 가장 먼저 탈락하는 사람 번호 [번호,몇번쨰]// 탈락자 없으면 0,0
// 탈락 조건 1. 단어가 틀림, 중복단어임,
// . 워드를 인덱스로 순회함
// . 나머지 및 나눔 연산을 통해 해당 워드가 어떤 사람의 몇번째 워드인지 확인 가능
// . 순차적으로 set에 넣고 크기 변화 확인을 통해 중복됐는지 확인
// . 만약 결격 사유가 있다면 
function solution(n, words) {
    var answer = [0,0];
    
    const s = new Set()
    let lastWord = ""
    for(let [idx,item] of words.entries()){
        const man = idx%n //0,1,2
        const manCount = Math.floor(idx/n) + 1 // 1,2,3
        
        if(idx===0){
            s.add(item)
            lastWord = item
            continue
        }
        if(lastWord[lastWord.length-1] !== item[0]){// 끝말잇기 비교
            answer = [man+1,manCount] 
            break;
        }
        const prevSize = s.size
        s.add(item)
        const curSize = s.size
        lastWord = item
        if(prevSize === curSize){
            answer = [man+1,manCount] 
            break;
        }
        
    }
    

    return answer;
}