import React, {useCallback, useEffect, useState} from 'react'
import {Button, Grid, styled, Typography} from "@mui/material";
import SearchBar from "../base/SearchBar";
import {useApi} from "../base/ApiProvider";


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

const FoodList = () => {
    const [descriptions, setDescriptions] = useState([])
    const { getFoodList } = useApi()
    const action = async () => {
        try {
            setDescriptions((await getFoodList()).data)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {action()},[]);
    return (
        <Grid item container>
                <FoodSearch descriptions={descriptions} />
        </Grid>

    ) }  
export default FoodList