//. 길이순으로 재정렬
// [set,set,set] 구조로 생성
// 반복문 해서 큰것부터 넣고 
//넣을차래인거 길이만큼 set 변화 있는지 감시
// 변화가 아예 없으면 false 

function solution(phone_book) {
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++){
        if(phone_book[i+1].startsWith(phone_book[i])){
            return false
        }
    }
    return true
}