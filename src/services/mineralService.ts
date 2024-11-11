// map에 사용될 광물 속성값들
interface Mineral {
    id: number;
    name: string;
    quantity: number;
    price: number;
    rarity: number;
}

const mineralNames: Array<string> = ['diamond', 'emerald', 'ruby', 'opal','quartz','topaz','gold', 'silver', 'bronze'];
const mineralPrice: Array<number> = [100000, 5000, 3000, 2000, 200, 1500, 800, 600, 250];
const mineralRarity: Array<number> = [1, 3, 5, 10, 20, 10, 10, 15, 26];
const mineralCumulRarity: Array<number> = [1, 4, 9, 19, 39, 49, 59, 74, 100];

class MineralService {
    // Map 자료구조: key = 광물이름 / value = 광물정보
    private mineralStorage: Map<string, Mineral>;
    // 생성자 초기화 ==================================================================================
    constructor() {
        this.mineralStorage = new Map<string, Mineral>();
        for (let i = 0; i < 9; i++){
            this.mineralStorage.set(mineralNames[i], { id: i, name: mineralNames[i], quantity: 0, price: mineralPrice[i], rarity: mineralRarity[i] });
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
    // 광물 획득 : quantity 에 추가
    addMineral(name: string, amount: number): void {
        const mineral = this.mineralStorage.get(name);
        if (mineral) {
            mineral.quantity += amount;
            this.mineralStorage.set(name, mineral);
        }
    }
    chooseRandomMineralIndex(): number{
        const myRand = Math.round(Math.random() * 100);
        for (let i = 0; i < 9; i++){
            if (myRand <= mineralCumulRarity[i])
                return i;
        }
        return -1;
    }
    addRandommineral(): void {
        const randIndex: number = this.chooseRandomMineralIndex();
        this.addMineral( mineralNames[randIndex], 1);
    }
}

export default new MineralService();
