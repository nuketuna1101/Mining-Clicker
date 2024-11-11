import React from "react";
import { AppBar, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles"

const MyAppBar = styled(AppBar)({
    backgroundColor: '#49505e',
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
            <MyAppBar position="static" className="appbar">
                <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <MyTab label="Home" />
                    <MyTab label="Price Table" />
                    <MyTab label="Shop" />
                </Tabs>
            </MyAppBar>
        </>
    );
};

export default MenuBar;