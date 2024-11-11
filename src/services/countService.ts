
class CountService {
    // cnt 정보 : 클릭 횟수, 채굴 횟수
    private clickCnt: number;
    private minedCnt: number;
    // 생성자 초기화 ==================================================================================
    constructor() {
        this.clickCnt = 0;
        this.minedCnt = 0;
    }
    // getter 메서드 ==================================================================================
    getClickCnt(): number {
        return this.clickCnt;
    }
    getMinedCnt(): number {
        return this.minedCnt;
    }
    // 
    addClickCnt(): void {
        this.clickCnt++;
    }
    addMinedCnt(): void {
        this.minedCnt++;
    }
}

export default new CountService();
