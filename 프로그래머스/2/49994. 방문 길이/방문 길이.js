// 출력: 캐릭터가 처음 걸어본 길의 갯수
// 경계 넘어가면 무시 
// 1. 11x11 arr(10)배열 생성
// 2. 다 초기값 0으로 세팅.간곳은 1
// 3. 이동하면 이동하기 직전에 이동한 move 기록 . 만약 같지 않다면 +1


function solution(dirs) {
    const now = {x:5,y:5}
    
    
    function up(){
        if(now.y === 10){
            return
        }
        now.y += 1
 
    }
    function right(){
        if(now.x === 10){
            return
        }
        now.x += 1
    }
    function left(){
        if(now.x === 0){
            return
        }
        now.x -= 1
    }
    function down(){
        if(now.y === 0){
            return
        }
        now.y -= 1
    }
    
       function move(c){
        switch(c){
            case 'U':
                up();
                break;
            case 'D':
                down();
                break;
            case 'R':
                right();
                break;
            case 'L':
                left();
                break;
                
        }
        
    }
    
    var answer = 0;
    const mapArr = Array.from({length : 11}, ()=> new Array(11).fill(0))
    mapArr[now.x][now.y] = 1
    
    const set = new Set()
    
    const inputs = dirs.split("")
    let count = 0     
    for(let i of inputs){
        const prevX = now.x
        const prevY = now.y
        move(i)
        
        if(now.x===prevX && now.y === prevY){
            continue
        }
        
        const n = [now.x,now.y]
        const p = [prevX,prevY]
        const np = [now.x+","+now.y,prevX+","+prevY]
        np.sort()
        
        const npStr = np[0]+',,'+np[1]
        
        set.add(npStr)
        console.log(npStr)
       
        mapArr[prevX][prevY] = i
        
    }
    
    console.log(set.size)
    
    
    
    
    
    
    return set.size
}