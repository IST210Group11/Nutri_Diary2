import React, {useState} from 'react'
import {Grid, styled, Tab, Tabs, Typography} from "@mui/material";
import {useNavbar, useTab} from "./TabProvider";

const StyledGrid = styled(Grid)({
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 1px 0px rgba(0, 0, 0, 0.09)"
})

const StyledTab = styled(Tab)({
    padding: "1px 8px"
})

const TabLabel = ({ text, selected }) =>
    <Typography
        sx={{
            fontSize: 18,
            color: !selected ? "black" : "#2878DA",
            textTransform: "capitalize",
        }}
    >
        { text }
    </Typography>

const Navbar = () => {
    const { tab, changeTab } = useTab()

    const handleChange = (event, newTab) => {
        changeTab(newTab)
    }

    return (
        <StyledGrid container direction="column" sx={{ p: "8px 20px 0" }} position="relative">
            <Grid item>
                <Typography
                    sx={{ fontSize: 36, fontWeight: "bold" }}
                    color="black"
                >
                    Nutri Diary
                </Typography>
            </Grid>
            <Grid item>
                <Tabs value={tab} onChange={handleChange}>
                    <StyledTab label={<TabLabel selected={tab === 0} text="Nutrition Tracking"/>} />
                    <StyledTab label={<TabLabel selected={tab === 1} text="Food Input" />} />
                    <StyledTab label={<TabLabel selected={tab === 2} text="Food List"/>} />
                    <StyledTab label={<TabLabel selected={tab === 3} text="User Specifications"/>} />
                </Tabs>
            </Grid>
        </StyledGrid>
    )
}

export default Navbar