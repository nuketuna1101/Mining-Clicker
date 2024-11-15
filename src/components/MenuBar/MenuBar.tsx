import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles"

// ===========================================================================
// == HOOKS ==
// import { usePriceTable } from "../../hooks/usePriceTable";
// ===========================================================================
import mineralService from "../../services/mineralService";
import { Mineral } from "../../data/minerals";
import Login from "../Login/Login";
import { useAuth } from '../../contexts/LoginContext';

import "./MenuBar.css";
import Shop from "../Shop/shop";


const MyAppBar = styled(AppBar)({
    backgroundColor: '#49505e',
    position: 'fixed',
    top: '2.5%',
    width: '17.5%',
    zIndex: 1000,
});
const MyTabs = styled(Tabs)({
    flexGrow: 1,
    justifyContent: 'center'
});

const MyTab = styled(Tab)({
    color: '#99a1af',
    fontSize: '16px',
    fontWeight: 'bold',
});

const MenuBar: React.FC = () => {
    // 메뉴 눌러서 값 설정
    const [value, setValue] = React.useState<number>(0);
    const [prices, setprices] = React.useState<Mineral[]>([]);
    const {isCertified, setIsCertified, username, setUsername} = useAuth();

    // 탭 누를 때의 
    const handleChange = async (event: React.ChangeEvent<{}>, newValue: number) => {
        if(!isCertified)    return;

        setValue(newValue);
        if (newValue === 1) {
            const prices = await mineralService.fetchMineralPrices();
            // const prices = await mineralService.fetchMineralPricesRenewal();
            setprices(prices);
        }
    };

    return (
        <>
            <MyAppBar position="static" className="menubar">
                <MyTabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <MyTab label="Home" />
                    <MyTab label="Price Table" />
                    <MyTab label="Shop" />
                </MyTabs>
            </MyAppBar>
            <div className="menubar-display-content">

                {value === 0 && (
                    <div className="menubar-home">
                        <Login />
                    </div>)}
                {value === 1 && (
                    <div className="menubar-price-table">
                        <h2>Price Table</h2>
                        <ul className="price-list">
                            {prices.map((mineral) => (
                                <li className="price-item" key={mineral.id}>
                                    <span className="mineral-name">{mineral.name}</span>
                                    <span className="mineral-price">${mineral.price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>)}
                {value === 2 && (
                    <div className="menubar-shop">
                        {/* <h2>Shop</h2> */}
                        <Shop />
                    </div>)}

            </div>

        </>
    );
};

export default MenuBar;


//-------------------------
