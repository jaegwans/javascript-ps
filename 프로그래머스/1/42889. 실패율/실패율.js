    // 실패율 :스테이지도달했으나 클리어 못한사람 수 / 스테이지 도달한 사람 수 
    // 반환: 실패율 높은 순부터 내림차순으로 스테이지 번호 배열 반환//만약 동점이면 작은번호의 스테이지가 먼저
    // 입력: 사용자가 멈춰있는 스테이지 번호 담긴 배열
    // 입력의 길이는 20만 이하

    // 클리어count 배열 생성
    // states순회하며 클리어count 배열 등록(3이면 1,2에 + )
    // 동시에 도전인수 배열에도 등록

    // 실패율 arr 생성 :  도전인수 count/ 클리어 count
    // 실패율 arr ->  entries로 이터레이터화 
    // 실패율 기준으로 내림차순 정렬 후 map으로 스테이지 번호 배열 반환

function solution(N, stages) {
    
    const clearCount = new Array(N+2).fill(0)
    const chalCount = new Array(N+2).fill(0)
    for(let i of stages){
        for(let j = 0; j<=i;j++){
         clearCount[j] += 1
        }
        chalCount[i] += 1
    }
    
    console.log(clearCount , "도달 수")
    console.log(chalCount , "도전중 수")
    
    const failureRate = new Array(N+1).fill(0)
    
    for(let [idx,i] of failureRate.entries()){
        if(idx===0){
            continue;
        }
        if(Infinity === chalCount[idx]/clearCount[idx]){
            failureRate[idx] = 1
            continue;
        }
        failureRate[idx] = chalCount[idx]/clearCount[idx]
    }
    
    console.log(failureRate)
    
    const failureRateMap = [...failureRate.entries()]
    
    failureRateMap.shift()
    failureRateMap.sort((a,b)=>b[1]-a[1])
    
    const result = failureRateMap.map((i)=>i[0])
    
    return result;

}