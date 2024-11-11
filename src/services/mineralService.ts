// mineralService 클래스
// 광물에 대한 처리
import { Mineral, mineralNames, mineralPrice, mineralRarity, mineralCumulRarity, oreImageAtlas } from "../data/minerals";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

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
        if (mineral && !mineral.isDiscoverdBefore){
            // alert("첫 획득! " + name);
            mySwal.fire({
                title: "Achievement",
                text: `First Discovery of ${name}`,
                icon: "success",
                confirmButtonText: "Wow!",
                imageUrl: `${oreImageAtlas[mineral.id]}`, // 여기에 이미지 URL을 추가합니다.
                imageWidth: 50,
                imageHeight: 50,
            });
            mineral.isDiscoverdBefore = true;
            this.mineralStorage.set(name, mineral);
        }
    }
    
    // ===============================================================================================
    // 랜덤 광물 획득 flow: 첫 획득인지 확인하고, 해금 이벤트 + 광물 추가해주기
    addRandommineral(): void {
        const randIndex: number = this.chooseRandomMineralIndex();
        const mineralName = mineralNames[randIndex];
        this.checkMineralDiscoverdBefore(mineralName);
        this.addMineral( mineralName, 1);
    }


    async fetchMineralPrices(): Promise<Mineral[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const prices = this.getAllMinerals().map(mineral => ({
                    ...mineral,
                    price: mineral.price + Math.round(Math.random() * 100)
                }));
                resolve(prices);
            }, 1000);
        })
    }
}

export default new MineralService();
