// 변경 -> 기존 채팅방 출력 메세지네임도 변경
// 변경 1. 나간후 다른 닉네임으로 돌어옴
// 변경 2. 그냥 변경함
// 레코드는 최대 10만
// 레코드 순회
// 엔터와 리브를 기록하되 해쉬 변수로서 참조 기록 


function solution(record) {
    
    const hash = {}
    const answer = []
    const result = []
    
    function enterUser(uid,name){
        // 네임 해쉬에 있는지 확인
        // 네임이 다르면 반영
        // 앤서푸시
        if(hash[uid] === undefined){
            hash[uid] = name
        }
        if(hash[uid] !== name){
            hash[uid] = name
        }
        answer.push([uid,'in'])
    }
    function leaveUser(uid,name){
        answer.push([uid,'out'])
    }
    function changeName(uid,name){
        hash[uid]=name
    }
    
    
    for(let i of record){
        const [cmd,uid,name] = i.split(' ')
        if(cmd === "Enter"){
            enterUser(uid,name)
        }
        if(cmd === "Leave"){
            leaveUser(uid,name)
        }
        if(cmd === "Change"){
            changeName(uid,name)
        }
    }
    for(let i of answer){
        if(i[1]=== 'in'){
            result.push(`${hash[i[0]]}님이 들어왔습니다.`)
        }
        if(i[1]=== 'out'){
            result.push(`${hash[i[0]]}님이 나갔습니다.`)
        }
    }

    return result;
}