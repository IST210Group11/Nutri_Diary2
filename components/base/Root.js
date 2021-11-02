import {useTab} from "./TabProvider";
import NutritionTracking from "../panels/NutritionTracking";
import FoodInput from "../panels/FoodInput";
import FoodList from "../panels/FoodList";
import UserSpecification from "../panels/UserSpecification";
import {Box, Grid, styled} from "@mui/material";
import {useState} from "react";
import Sidebar from "./Sidebar";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import {useSidebar} from "./SidebarProvider";

const selectPage = (tab) => {
    switch (tab) {
        case 0:
            return <NutritionTracking index={0} />
        case 1:
            return <FoodInput index={1} />
        case 2:
            return <FoodList index={2} />
        case 3:
            return <UserSpecification index={3} />
    }
}

const StyledBox = styled(Grid)({
    height: "100vh",
    width: "100%",
    backgroundColor: "white",
})

const Root = () => {
    const { currentPage } = useSidebar()

    return (
        <StyledBox container>
            <Sidebar />
            <Grid
                item
                sx={{
                    height: "100%",
                    width: `${100 - 18}%`,
                    padding: "30px 15px",
                    overflow: "auto",
                    backgroundColor: "#f3f3f3",
                }}
            >
                { selectPage(currentPage) }
            </Grid>
        </StyledBox>
    )
}

export default withPageAuthRequired(Root)
