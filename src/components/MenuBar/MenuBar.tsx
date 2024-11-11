import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles"

const MyAppBar = styled(AppBar)({
    backgroundColor: '#49505e',
    position: 'fixed',
    top: '2.5%',
    width: '17.5%',
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
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
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
                    <div className="appbar-home">
                        <h2>Home</h2>
                    </div>)}
                {value === 1 && (
                    <div className="appbar-price-table">
                        <h2>Price Table</h2>
                    </div>)}
                {value === 2 && (
                    <div className="appbar-shop">
                        <h2>Shop</h2>
                    </div>)}

            </div>

        </>
    );
};

export default MenuBar;