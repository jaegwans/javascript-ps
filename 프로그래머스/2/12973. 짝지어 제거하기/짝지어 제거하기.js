// 같은 알파뱃 2개 제거 후 붙임 반복

function solution(s)
{
     var answer = 0;
    
    const arr = s.split("")
    const l = arr.length
    const stackR = [] 
    
    for(let i =0; i<l ; i++){
        
        if(stackR.length === 0 ){
            stackR.push(arr.pop());
        }
        
        if(arr[arr.length-1] === stackR[stackR.length-1]){
        
            arr.pop()
            stackR.pop()
        }else{
            stackR.push(arr.pop())
        }
        if(arr.length ===0 && stackR.length ===0){
        return 1
    }
     
    }
    
    


    return answer;
}