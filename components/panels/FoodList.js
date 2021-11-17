import React, {useCallback, useEffect, useState} from 'react'
import {Button, Grid, styled, Typography} from "@mui/material";
import SearchBar from "../base/SearchBar";
import {useApi} from "../base/ApiProvider";
import FoodRowLegend from "../base/FoodRowLegend";
import FoodRow from "../base/FoodRow";
import {useAuthUser} from "../base/UserProvider";
import {useSidebar} from "../base/SidebarProvider";

const StyledButton = styled(Button)({
    padding: "5px 10px",
    backgroundColor: "#2878DA",
    "&:hover": {
        backgroundColor: "rgba(40, 120, 218, 0.8)"
    },
    width: "80%"
})    


const SearchItem = ({ description, index }) => {
    const { removeFoodList } = useApi()

    const handleClick = async () => {
        try {
            await removeFoodList(description)
            
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Grid item container xs={12} sx={{ mt: index > 0 ? 3 : 0 }}>
            <Grid item container direction="column" xs={10}>
                <Grid item>
                    <Typography
                        sx={{ fontSize: 18, fontWeight: "bold" }}
                        color="black"
                    >
                        { description.description }
                    </Typography>
                </Grid>
                <Grid item container sx={{ mt: 0.5 }} spacing={2} justifyContent="flex-start">
                    <Grid item>
                        <Typography
                            sx={{ fontSize: 14, fontWeight: 500 }}
                        >
                            Calories: { description["Energy KCAL"] }
                        </Typography>
                    </Grid>
                    <Grid item sx={{ ml: 2 }}>
                         <Typography
                            sx={{ fontSize: 14, fontWeight: 500 }}
                        >
                            Protein: { description["Protein G"] }g
                        </Typography>
                    </Grid>
                    <Grid item sx={{ ml: 2 }}>
                         <Typography
                            sx={{ fontSize: 14, fontWeight: 500 }}
                        >
                            Carbohydrates: { description["Carbohydrates G"] }g
                        </Typography>
                    </Grid>
                    <Grid item sx={{ ml: 2 }}>
                         <Typography
                            sx={{ fontSize: 14, fontWeight: 500 }}
                        >
                            Fat: { description["Fat G"] }g
                        </Typography>
                    </Grid>
                    <Grid item sx={{ ml: 2 }}>
                         <Typography
                            sx={{ fontSize: 14, fontWeight: 500 }}
                        >
                            Amount in g: { description["Amount in g"] }g
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} alignItems="center" container justifyContent="center">
                <StyledButton variant="text" onClick={handleClick} >
                    <Typography
                        sx={{ fontSize: 12, fontWeight: "bold" }}
                        color="white"
                    >
                        Remove
                    </Typography>
                </StyledButton>
            </Grid>
        </Grid>
    )
}

const FoodSearch = ({ descriptions }) => {

    if (descriptions && descriptions.length > 0) {
        console.log(descriptions)
        return (
            <Grid item container xs={12}>
                {descriptions.map((description, index) => <SearchItem key={index} index={index} description={description}/>)}
            </Grid>
        )
    }
    return null
}

const FoodList = ({ index }) => {
    const [descriptions, setDescriptions] = useState([])
    const { getFoodList } = useApi()
    const { user_id, factor, height } = useAuthUser()
    const { currentPage, changePage } = useSidebar()

    useEffect(() => {
        (async () => {
            try {
                setDescriptions((await getFoodList(user_id)).data)
            } catch (e) {
                console.error(e)
            }
        })()
    },[]);
    const handleClick2 = () => {
        changePage(3)  // change to food input
    }
    if (!factor || !height) {
        return (
            <Grid container justifyContent="center" alignItems="center" height="100%" direction="column">
                <Typography
                    fontSize={50}
                    fontWeight="bold"
                    fontFamily="Montserrat"
                >
                    Enter User Specifications
                </Typography>
                <Button
                    variant="outlined"
                    sx={{ backgroundColor: "#2878DA", color: "white", padding: "10px 30px" }}
                    onClick={handleClick2}
                >
                    <Typography
                        fontSize={32}
                        fontWeight="bold"
                        fontFamily="Montserrat"
                    >
                        User Specifications
                    </Typography>
                </Button>
            </Grid>
        )
    }
    return (
        <Grid container direction="column">
            <FoodRowLegend />
            {
                descriptions.map((description, index) => <FoodRow food={description} key={index} type="remove" />)
            }
        </Grid>
    )
}
export default FoodList