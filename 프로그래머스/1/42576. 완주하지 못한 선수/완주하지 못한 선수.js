function solution(participant, completion) {
    const hash = []
    for(let i of completion){
        if(hash[i]>=1){
         hash[i] = hash[i]+1
            continue;
        }
        hash[i] = 1
    }

    
    for(let i of participant){
        if(hash[i] === undefined){
            return i
        }else{
            hash[i] = hash[i]-1
        }
    }

    
    for(const i in hash){
        if(hash[i]<0){
            return i
        }
    }
    
    
    var answer = '';
    return answer;
}