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
    const q = [...progresses];
    
    while(q.length !==0){
        for(let i=0;i<speeds.length;i++){//한바퀴 돌림
           q[i] = q[i]+speeds[i];
        }
        
        let count = 0
        while(q.length !== 0){//한바퀴 돌림
            if(q[0]>=100){
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