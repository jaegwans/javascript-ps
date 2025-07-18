// 장르별 가장 다재생 곡 2개 모아 배스트엘범
// 1. 인기 장르 먼저, 그 안에서 재생 순 먼저, 겹치면 번호 낮은 순
//  곡 수는 1만
// hash 만들고 장르 순회하면서 합 기록
// 많은 순으로 순회하면서 최상단 2개 기록 
// 리턴에 기록
function solution(genres, plays) {
    const answer = []
    const hashG= {}
    for(let i = 0 ; i< genres.length ; i++){
        if(hashG[genres[i]] === undefined){
            hashG[genres[i]] = plays[i]
        }else{
            hashG[genres[i]] += plays[i]
        }
    }
    const hashGKeys = Object.keys(hashG)
    hashGKeys.sort((a,b)=>hashG[b]-hashG[a])
    
    for(let i of hashGKeys){
        const arr = []
        for(let j = 0 ; j< genres.length ; j++){
            if(i === genres[j]){
                arr.push(j)
            }
        }
        arr.sort((a, b) => {
  if (plays[b] === plays[a]) {
    return a - b; // 재생수 같으면 인덱스 오름차순(작은 게 먼저)
  }
  return plays[b] - plays[a]; // 재생수 내림차순
});
        if(arr[0] !== undefined) answer.push(arr[0])
        if(arr[1] !== undefined)  answer.push(arr[1])
    }
    
    return answer

}