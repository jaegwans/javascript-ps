let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//합이 200인데 자연수 여러개의 합이 다. 그 여러개가 최대가 되도록
// 더하고 불필요한 자연수 빼기 

let n = Number(input[0])
count = 0
let sum = 0
for(let i = 1; sum < n ; i++){
    sum += i
    count++
}

if(sum>n){
    count--
}

console.log(count)