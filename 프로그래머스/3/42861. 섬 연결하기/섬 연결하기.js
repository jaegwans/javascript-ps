// 통행 최소비용
// 다리 여러번 건너도 됨
// [출발][ 섬 번호,섬 번호2, 비용] // 5천개
// 크루스칼임
// 연결한 다리 비용 합 최소

function find(parent,i){
    if (parent[i] == i){
        return i
    }
    
    parent[i] = find(parent, parent[i]);
    
    return parent[i];
}

function union(parent, rank, x,y){
    const xroot = find(parent,x)
    const yroot = find(parent,y)
    
    if(rank[xroot] < rank[yroot]){
        parent[xroot] = yroot;
    }else if(rank[xroot]>rank[yroot]){
        parent[yroot] = xroot
    }else{
        parent[yroot] = xroot
        rank[xroot] += 1;
    }
}

function solution(n, costs) {
    costs.sort((a,b)=> a[2] - b[2]) // 비용순 오름차
    
    const parent = Array.from({length:n},(_,i)=>i)
    
    const rank = Array(n).fill(0)
    
    let minCost = 0 // 최소비용
    let edges = 0 // 간선
    
    for(const edge of costs){
        if(edges === n-1){
            break;
        }
        
        const x = find(parent,edge[0]);
        const y = find(parent,edge[1]);
        
        if(x !== y){
            union(parent, rank,x,y)
            minCost += edge[2];    
            edges += 1
        }
    }
    
    return minCost
}