import { useState, useEffect } from 'react';

interface MineralPrice {
  name: string;
  price: number;
}

export const usePriceTable = () => {
  const [prices, setPrices] = useState<MineralPrice[]>([]);

  useEffect(() => {
    // 데이터를 가져오기.
    const fetchPrices = async () => {
      const data: MineralPrice[] = [
        { name: 'Diamond', price: 100000 },
        { name: 'Emerald', price: 5000 },
        { name: 'Ruby', price: 3000 },
      ];
      setPrices(data);
    };
    fetchPrices();
  }, []);

  return prices;
};
