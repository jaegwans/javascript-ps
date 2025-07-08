// s.len <1000
// 0부터 s.len까지 반복
// 각 반복문 속에서 올바른지 카운트

function isComplete(arr){
    
// 또 여는 괄호거나 아니면 마지막 idx에 대응하는 닫는괄호면 뻄 아니면 f
    // 끝낫는데 스택니 남았으면 f
// 나머지 t
    const stack = []
    
    const struc ={
        "{" : "}",
        "[" : "]",
        "(" : ')'
    }
    
    const open = ["{","(","["]
    
    for(let i of arr){
        if(open.includes(i)){ //여는기호면
            stack.push(i)
        }else{ // 닫는기호면
            if(struc[stack[stack.length-1]] === i){
                const popItem = stack.pop()
                if(popItem===undefined){
                    return false
                }
            }else{
                return false
            }
        }
    }
    
    if(stack.length>0){
        return false
    }
    
    return true
    
    
}

function solution(s) {
    count = 0
    
    const arr = s.split('')
    const len = arr.length
    
    for(let i = 0; i < len;i++ ){
        
        if(isComplete(arr)){
            console.log("pass")
            count++
        }else{
        console.log("non")
        }
        const temp = arr.shift()
        arr.push(temp)
        
    }

    
    
    return count
}