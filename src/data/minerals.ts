import oreImg01 from '../assets/ore_atlas_01.png';
import oreImg02 from '../assets/ore_atlas_02.png';
import oreImg03 from '../assets/ore_atlas_03.png';
import oreImg04 from '../assets/ore_atlas_04.png';
import oreImg05 from '../assets/ore_atlas_05.png';
import oreImg06 from '../assets/ore_atlas_06.png';
import oreImg07 from '../assets/ore_atlas_07.png';
import oreImg08 from '../assets/ore_atlas_08.png';
import oreImg09 from '../assets/ore_atlas_09.png';


export interface Mineral {
    id: number;
    name: string;
    quantity: number;
    price: number;
    rarity: number;
    isDiscoverdBefore: boolean;
}

export const mineralNames: Array<string> = ['diamond', 'emerald', 'ruby', 'opal', 'quartz', 'topaz', 'gold', 'silver', 'bronze'];
export const mineralPrice: Array<number> = [100000, 5000, 3000, 2000, 200, 1500, 800, 600, 250];
export const mineralRarity: Array<number> = [1, 3, 5, 10, 20, 10, 10, 15, 26];
export const mineralCumulRarity: Array<number> = [1, 4, 9, 19, 39, 49, 59, 74, 100];

export const oreImageAtlas = [
    oreImg01,
    oreImg02,
    oreImg03,
    oreImg04,
    oreImg05,
    oreImg06,
    oreImg07,
    oreImg08,
    oreImg09,
];