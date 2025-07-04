function solution(arr1, arr2) {
    //행렬곱, a행 끼리와 b렬 끼리 곱 합
    // 미리 답 2차원 배열 생성
    // arr1의 행 반복문 -> arr1의 n행과 arr2의 m열을 곱하여 result[n][m]에 저장
    
    
    const r = arr1.length
    const c = arr2[0].length
    
    const result = new Array(r).fill(0).map(()=>[...new Array(c).fill(0)])
    
  for(let i = 0 ; i<r; i++){
      for(let j = 0; j<c; j++){
          
          let sum = 0
          for(const [idx,item] of arr1[i].entries()){
              sum += item * arr2[idx][j]
          }
          result[i][j] = sum
      }
  }


    return result;
}