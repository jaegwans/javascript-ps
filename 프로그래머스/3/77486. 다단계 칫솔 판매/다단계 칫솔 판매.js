function solution(enroll, referral, seller, amount) {
    let parent = {};
    
    for(let i = 0; i<enroll.length; i++){
        parent[enroll[i]] = referral[i]
    }
    
    let total = {}
    for(let name of enroll){
        total[name] = 0;
    }
    
    for(let i = 0; i < seller.length; i++){
        
        let money = amount[i] * 100
        
        let curName = seller[i]
        
        // 부모로 타고 올라가며 지속
        while(money > 0 && curName != "-"){
            total[curName] += money - Math.floor(money/10)
            curName = parent[curName]
            
            money = Math.floor(money / 10)
        }
        
    }
    
    return enroll.map(name =>total[name])
    
    
}