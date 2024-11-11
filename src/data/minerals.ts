export interface Mineral {
    id: number;
    name: string;
    quantity: number;
    price: number;
    rarity: number;
    isDiscoverdBefore: boolean;
}

export const mineralNames: Array<string> = ['diamond', 'emerald', 'ruby', 'opal','quartz','topaz','gold', 'silver', 'bronze'];
export const mineralPrice: Array<number> = [100000, 5000, 3000, 2000, 200, 1500, 800, 600, 250];
export const mineralRarity: Array<number> = [1, 3, 5, 10, 20, 10, 10, 15, 26];
export const mineralCumulRarity: Array<number> = [1, 4, 9, 19, 39, 49, 59, 74, 100];