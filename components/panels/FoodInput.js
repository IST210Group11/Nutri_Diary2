import React, {useCallback, useEffect, useState} from 'react'
import {Button, Grid, styled, Typography, TextField, InputAdornment, InputLabel,} from "@mui/material";
import SearchBar from "../base/SearchBar";
import {useApi} from "../base/ApiProvider";
import FoodRowLegend from "../base/FoodRowLegend";
import FoodRow from "../base/FoodRow";
import {useSidebar} from "../base/SidebarProvider";
import {useAuthUser} from "../base/UserProvider";
const StyledButton = styled(Button)({
    padding: "10px 10px",
    backgroundColor: "#2878DA",
    "&:hover": {
        backgroundColor: "rgba(40, 120, 218, 0.8)"
    },
    width: "80%"
})

const SearchItem = ({ description, index }) => {
    const { addFoodList } = useApi()

    const [Weight, setWeight] = useState(100)
    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    
    const handleClick = async () => {
        try {
            const description2 = {
                description: description.description,
                'Energy KCAL': description["Energy KCAL"],
                'Protein G': description["Protein G"],
                'Carbohydrates G': description["Carbohydrates G"],
                'Fat G': description["Fat G"],
                'Cholesterol MG': description["Cholesterol MG"],
                'Sugars G': description["Sugars G"],
                'Fiber G': description["Fiber G"],
                'Calcium, Ca MG': description["Calcium, Ca MG"],
                'Copper, Cu MG': description["Copper, Cu MG"],
                'Iron, Fe MG': description["Iron, Fe MG"],
                'Manganese, Mn MG': description["Manganese, Mn MG"],
                'Magnesium, Mg MG': description["Magnesium, Mg MG"],
                'Potassium, K MG': description["Potassium, K MG"],
                'Sodium, Na MG': description["Sodium, Na MG"],
                'Zinc, Zn MG': description["Zinc, Zn MG"],
                'Vitamin A UG': description["Vitamin A UG"],
                'Vitamin C MG': description["Vitamin C MG"],
                'Vitamin D UG': description["Vitamin D UG"],
                'Amount in g': Weight
            }

            console.log("DESCRIPTION2", description2)
            
            await addFoodList(description2)

            
        } catch (e) {
            console.error(e)
        }
        
    }

    

    return (
        <Grid item container xs={12} sx={{ mt: index > 0 ? 3 : 0 }}>
            <Grid item container direction="column" xs={9}>
                <Grid item>
                    <Typography
                        sx={{ fontSize: 18, fontWeight: "bold" }}
                        color="black"
                    >
                        { description.description }
                    </Typography>
                    <a href="/api/auth/login">Login</a>
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
            <Grid item xs={1}>
                <TextField
                    fullWidth
                    value={Weight}
                    onChange={onChangeWeight}
                    label="Weight"
                    variant="outlined"
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">g</InputAdornment>
                    }}
                />
            </Grid>
            <Grid item xs={2} alignItems="center" container justifyContent="center">
                <StyledButton id = "test" variant="text" onClick={handleClick} >
                    <Typography
                        sx={{ fontSize: 12, fontWeight: "bold" }}
                        color="white"
                        id = "temp"
                    >
                        Add
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

const FoodInput = ({ index }) => {
    const [searchValue, setSearchValue] = useState("")
    const [descriptions, setDescriptions] = useState([])
    const { getDescriptions } = useApi()
    const { user_id, factor, height } = useAuthUser()
    const { currentPage, changePage } = useSidebar()

    const onClickSearch = async () => {
        try {
            if (searchValue !== "") {
                console.log(searchValue)
                setDescriptions((await getDescriptions(searchValue)).data)
            }
        } catch (e) {
            console.error(e)
        }
    }
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
            <Grid item container xs={12} justifyContent="center">
                <div style={{ width: "70%" }}>
                    <SearchBar value={searchValue} onChange={setSearchValue} onClickSearch={onClickSearch} />
                </div>
            </Grid>
            <Grid item container sx={{ mt: 2, pb: 4 }}>
                { descriptions.length > 0 && <FoodRowLegend /> }
                {
                    descriptions.map((description, index) => <FoodRow food={description} key={index} type="add" />)
                }
            </Grid>
        </Grid>
    )
}

export default FoodInput