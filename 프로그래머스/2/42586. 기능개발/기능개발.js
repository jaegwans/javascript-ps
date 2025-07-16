class Queue{
    arr = []
    head = 0
    rear = 0
    push(item){
        arr.push(item)
        rear++
    }
    pop(){
        return arr[haed++]
    }
    size(){
        return rear-head
        
    }
    isEmpty(){
        return rear===head
        
    }
}

function solution(progresses, speeds) {
    var answer= [];
    const q = [...progresses]; // 일반배열 큐에 작업배열 삽입
    
    while(q.length !==0){ // 하루 지남
        for(let i=0;i<speeds.length;i++){ // 진행도 + 진행률
           q[i] = q[i]+speeds[i];
        }
        
        let count = 0
        while(q.length !== 0){ // 큐 순회
            if(q[0]>=100){ // 큐가 100 도달 시
                count++
                q.shift()
                speeds.shift()
            }else{
                break;
            }
        }
        if(count>0){
            answer.push(count)
        }
      
       
    }
    
    return answer;
}