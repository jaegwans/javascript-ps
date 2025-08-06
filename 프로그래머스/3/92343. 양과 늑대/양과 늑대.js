class Queue{
    arr = []
    front = 0
    rear = 0
    
    push(i){
        this.arr.push(i)
        this.rear++
    }
    pop(){
        return this.arr[this.front++]
    }
    isEmpty(){
        return this.front === this.rear
    }
}

function buildTree(info,edges){
    const tree = Array.from({length:info.length},()=>[]);
    for(const [from,to] of edges){
        tree[from].push(to)
    }
    return tree
};

function solution(info, edges) {
  const tree = buildTree(info, edges); // ➋ 트리 생성
  let maxSheep = 0; // ➌ 최대 양의 수를 저장할 변수 초기화
  
  // ➍ BFS를 위한 큐 생성 및 초기 상태 설정
  const q = new Queue();
  q.push([0, 1, 0, new Set()]); // (현재 위치, 양의 수, 늑대의 수, 방문한 노드 집합)

  // BFS 시작
  while (!q.isEmpty()) {

    const [current, sheepCount, wolfCount, visited] = q.pop();

    maxSheep = Math.max(maxSheep, sheepCount);
   
    for (const next of tree[current]) {
      visited.add(next);
    }
   
    for (const next of visited) {
      if (info[next]) { // ➒ 늑대일 경우
        if (sheepCount !== wolfCount + 1) { // 거쳐도 아직 양이 더 많으면
          const newVisited = new Set(visited) // 새 비시티드를 만듦
          newVisited.delete(next) // 방문비시티드에서 
          q.push([next, sheepCount, wolfCount + 1, newVisited]);
        }
      } else { // ➓ 양일 경우
        const newVisited = new Set(visited)
        newVisited.delete(next)
        q.push([next, sheepCount + 1, wolfCount, newVisited]);
      }
    }
  }

  return maxSheep;
}