import {useTab} from "./TabProvider";
import NutritionTracking from "../panels/NutritionTracking";
import FoodInput from "../panels/FoodInput";
import FoodList from "../panels/FoodList";
import UserSpecification from "../panels/UserSpecification";
import {Box, Grid, styled} from "@mui/material";

const selectPage = (tab) => {
    switch (tab) {
        case 0:
            return <NutritionTracking />
        case 1:
            return <FoodInput />
        case 2:
            return <FoodList />
        case 3:
            return <UserSpecification />
    }
}

const StyledBox = styled(Box)({
    height: "100vh",
    width: "100%",
    backgroundColor: "white",
    padding: "50px 80px"
})

const Root = () => {
    const { tab } = useTab()

    return (
        <StyledBox>
            { selectPage(tab) }
        </StyledBox>
    )
}

export default Root