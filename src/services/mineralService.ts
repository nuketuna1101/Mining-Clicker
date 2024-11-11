// mineralService 클래스
// 광물에 대한 처리
import { Mineral, mineralNames, mineralPrice, mineralRarity, mineralCumulRarity } from "../data/minerals";


class MineralService {
    // Map 자료구조: key = 광물이름 / value = 광물정보
    private mineralStorage: Map<string, Mineral>;
    // 생성자 초기화 ==================================================================================
    constructor() {
        this.mineralStorage = new Map<string, Mineral>();
        for (let i = 0; i < 9; i++){
            this.mineralStorage.set(mineralNames[i], { id: i, name: mineralNames[i], quantity: 0, price: mineralPrice[i], rarity: mineralRarity[i], isDiscoverdBefore: false });
        }
    }
    // getter 메서드 ==================================================================================
    getMineral(name: string): Mineral | undefined {
        return this.mineralStorage.get(name);
    }
    getAllMinerals(): Mineral[] {
        return Array.from(this.mineralStorage.values());
    }
    //================================================================================================
    // private 함수: 
    private addMineral(name: string, amount: number): void {
        const mineral = this.mineralStorage.get(name);
        if (mineral) {
            mineral.quantity += amount;
            this.mineralStorage.set(name, mineral);
        }
    }
    private chooseRandomMineralIndex(): number{
        const myRand = Math.round(Math.random() * 100);
        for (let i = 0; i < 9; i++){
            if (myRand <= mineralCumulRarity[i])
                return i;
        }
        return -1;
    }
    private checkMineralDiscoverdBefore(name: string): void{
        const mineral = this.mineralStorage.get(name);
        if (!mineral?.isDiscoverdBefore)
            alert("첫 획득! " + name);
    }
    // ===============================================================================================
    // 랜덤 광물 획득 flow: 첫 획득인지 확인하고, 해금 이벤트 + 광물 추가해주기
    addRandommineral(): void {
        const randIndex: number = this.chooseRandomMineralIndex();
        const mineralName = mineralNames[randIndex];
        this.checkMineralDiscoverdBefore(mineralName);
        this.addMineral( mineralName, 1);
    }
}

export default new MineralService();
