import React, { useState } from "react";
import { Mineral } from "../../data/minerals";
import mineralService from "../../services/mineralService";
import "./shop.css"; // CSS 파일 추가

// interface SellMineralProps {
//     minerals: Mineral[];
//     onSell: (mineralName: string, quantity: number) => void;
// }

// const Shop: React.FC<SellMineralProps> = ({ minerals, onSell }) => {
const Shop: React.FC = () => {
    // const [selectedMineral, setSelectedMineral] = useState<string>(minerals[0].name);
    // const [quantity, setQuantity] = useState<number>(0);

    const handleSell = () => {
        // if (quantity > 0) {
        //     onSell(selectedMineral, quantity);
        // } else {
        //     alert("Please enter a valid quantity.");
        // }
    };

    return (
        <div className="shop-container">
            <h2>Shop</h2>
            <div className="shop-section">
                <label className="shop-section-text" htmlFor="mineral-select">Select Mineral:</label>
                <select
                    id="mineral-select"
                    // value={selectedMineral}
                // onChange={(e) => setSelectedMineral(e.target.value)}
                >
                    {/* {minerals.map((mineral) => (
                        <option key={mineral.id} value={mineral.name}>
                            {mineral.name}
                        </option>
                    ))} */}
                </select>
            </div>
            <div className="shop-section">
                <label className="shop-section-text" htmlFor="quantity-input">Quantity:</label>
                <input
                    type="number"
                    id="quantity-input"
                    // value={quantity}
                    // onChange={(e) => setQuantity(Number(e.target.value))}
                    min="0"
                />
            </div>
            <button className="button-sell" onClick={handleSell}>Sell</button>
        </div>
    );
};

export default Shop;
