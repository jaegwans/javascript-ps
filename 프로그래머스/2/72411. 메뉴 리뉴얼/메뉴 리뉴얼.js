// 코스요리:최소 2가지 이상 , 2명이상 주문메뉴 조합만 포함
// 오더 순회하며 각 코스 크기별 오더조합: 갯수 로 해시 만듬
// 2개 미만은 자름 각 코스별로 가장 많이 주문된 조합을 골라야함
// 남은거 오름차순 정렬해서 리턴

function getCArr(str,k){
    const arr = str.split('')
    const result = []
    function backtrack(start,temp){
        if(temp.length === k){
            result.push([...temp])// 주소값을 저장하면 또 쓰이기떄문에 복사해야함
            return;
        }
        for(let i = start; i<arr.length ;i++){
            temp.push(arr[i]);
            backtrack(i+1,temp);
            temp.pop()  //이거때문에 참조문제 걱정안해도됨 
        }
    }
    backtrack(0,[])
    return result
}

function solution(orders, course) {
    var answer = [];
    for(let num of course){
        let max = 0
         const hash = {}
        for(let i of orders){
            const arr = getCArr(i,num);
            for(k of arr){
                const keyStr = k.sort().join("")
                if(hash[keyStr]=== undefined){hash[keyStr] = 1}
                else{
                    hash[keyStr]++
                }
            }
        }
        for(let cnt in hash){
                max = hash[cnt] > max ? hash[cnt] : max
            }
            if(max>=2){
                for(let j in hash){
                   if(hash[j]===max){
                        answer.push(j)
                   }  
                }       
            }
    }

    return answer.sort();
}