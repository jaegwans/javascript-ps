

function caseBCallback(i,idx){
    if(idx%2 === 0){
        return 2 
    }
    if(idx%8 === 1){
        return 1
    }
     if(idx%8 === 3){
      return 3
    }
    if(idx%8 === 5){
    return 4
    }
    if(idx%8 === 7) return 5
    
}
let iC = 0
const cArr = [3,1,2,4,5]
function callbackC(i,idx){
    
    const prevIc = iC
    if(idx%2 === 1){
        iC++
    }
    return cArr[prevIc%5]
}


function solution(answers) {
    //시험 최대 100문제, 케이스별 배열 생성 후 비교
    
    var answer = [];
    
    const l = answers.length
    const a = new Array(l).fill(0).map((i,idx)=>{
        return idx%5+1
    })
    const b = new Array(l).fill(0).map(caseBCallback)
    const c = new Array(l).fill(0).map(callbackC)
    
    function getPoint(arr) {
        let point = 0
        for(let i = 0; i<l; i++){
            if(arr[i] ===answers[i]){
                point++
            }
        }
        return point
    }
    
    const ap = getPoint(a)
    const bp = getPoint(b)
    const cp = getPoint(c)
    
    const resultArr = [[1,ap],[2,bp],[3,cp]]
    resultArr.sort((a,b)=>b[1]-a[1])
    
    answer.push(resultArr[0][0])
    if(resultArr[0][1] === resultArr[1][1]){
        answer.push(resultArr[1][0])
    }
    if(resultArr[0][1] === resultArr[2][1]){
        answer.push(resultArr[2][0])
    }
    console.log(a,b,c)

    return answer;
}