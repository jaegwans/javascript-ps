// 동일 유저 신고 횟수 1회
// k번 이상 신고시 이용 정지 -> 해당 신고 먹인 사람 모두에게 사실 공지 
// 내용 모두 취압하여 마지막에 한번에 게시판 이용 정지
// 처리 결과 메일 리턴
// 리포트 순회하여 신고 받은사람 해쉬 만들어서 배열로 신고자 넣고 이미 있으면 건너 뜀
// 해쉬의 각각 length 확인하여 k 이상만 모아서 따로 만듬
// id_list 크기의 배열 만들어서 해쉬 순회하면서 리설트 업데이트
function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0)
    
    const hash = {}
    
    for(let i of report){
         const [신고자, 피고] = i.split(' ')
         if(hash[피고] !==undefined){
            
            if(hash[피고].includes(신고자)){
                continue
            }else{
                hash[피고].push(신고자)
            }
         }else{
             hash[피고] = [신고자]
         }
    }
    
    const newHash = {}
    
    for(let i in hash){
        if(hash[i].length >= k){
            newHash[i] = hash[i]
        }
    }
    
    for(let key in newHash){
        for(let i of newHash[key]){
            const idx = id_list.indexOf(i)
            answer[idx] = answer[idx]+1
        }
    }
    

    return answer;
}