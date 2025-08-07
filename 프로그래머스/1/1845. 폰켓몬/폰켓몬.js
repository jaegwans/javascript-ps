//조합
//최대한 많은 종류의 폰켓몬을 선택하고자 함. 최대 종류갯수 
// 1. set으로 nums의 종류수를 구한다. 
// 2. 종류수만큼이 답이다 : 단 nums/2가 더 작다면 nums/2만큼이다.
function solution(nums) {
    const numsLength = nums.length
   const set = new Set(nums)
   const size = set.size
   
   if((numsLength/2)<size){
       return numsLength/2
   }else{
       return size
   }
}