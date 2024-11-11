import { AppBar, Tab, Tabs } from "@mui/material";
import React from "react";

const MenuBar: React.FC = () => {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <Tab label="Home" />
                    <Tab label="Send" />
                    <Tab label="Profile" />
                </Tabs>
            </AppBar>
        </>
    );
};

export default MenuBar;