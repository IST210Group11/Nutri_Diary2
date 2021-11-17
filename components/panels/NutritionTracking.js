import React, {useEffect, useState} from 'react'
import {
    Button,styled,
    Grid, Typography,
} from "@mui/material";
import {useApi} from "../base/ApiProvider";
import PieCard from "../base/PieCard";
import BarCard from "../base/BarCard";
import {useAuthUser} from "../base/UserProvider";
import {useSidebar} from "../base/SidebarProvider";

const CardContainer = styled(Grid)({
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.08)",
    borderRadius: "20px",
    padding: "10px 10px",
  })
  

const dailyValues = {
    "Calcium, Ca MG": 1300,
    "Carbohydrates G": 275,
    "Cholesterol MG": 300,
    "Copper, Cu MG": 0.9,
    "Energy KCAL": 2000,
    "Fat G": 78,
    "Fiber G": 28,
    "Iron, Fe MG": 18,
    "Magnesium, Mg MG": 420,
    "Manganese, Mn MG": 2.3,
    "Potassium, K MG": 4700,
    "Protein G": 50,
    "Sodium, Na MG": 2300,
    "Sugars G": 50,
    "Vitamin A UG": 900,
    "Vitamin C MG": 90,
    "Vitamin D UG": 20,
    "Zinc, Zn MG": 11,
    "description": "Daily Recommended Values(FDA)"
}

const barChartFields = ["Cholesterol MG","Sugars G","Fiber G","Calcium, Ca MG","Copper, Cu MG","Iron, Fe MG","Manganese, Mn MG","Magnesium, Mg MG","Potassium, K MG","Sodium, Na MG","Zinc, Zn MG","Vitamin A UG","Vitamin C MG","Vitamin D UG"]
const pieChartFields = ["Energy KCAL", "Carbohydrates G", "Protein G", "Fat G"]

const getPieChartName = (field) => {
    switch (field) {
        case "Energy KCAL":
            return "Calories"
        case "Carbohydrates G": 
            return "Carbohydrates"
        case "Protein G":
            return "Protein"
        case "Fat G":
            return "Fat"
    }
}

const NutritionTracking = ({ index }) => {
    const [nutrientSums, setNutrientSums] = useState({})
    const [barChartData, setBarChartData] = useState([])
    const { getNutrientSum, } = useApi()
    const { user_id, factor, height } = useAuthUser()
    const { currentPage, changePage } = useSidebar()

    useEffect(() => {
        (async () => {
            if (currentPage === index) {
                setNutrientSums((await getNutrientSum(user_id)).data[0])
            }
        })()
    }, [currentPage])

    useEffect(() => {
        if (nutrientSums) {
            const userFactor = factor ?? 1

            setBarChartData(barChartFields.reduce((result, current) => {
                return [
                    ...result,
                    {
                        name: current,
                        Progress: (nutrientSums[current] * 100 / (dailyValues[current] * userFactor)).toFixed(2),
                        Left: (100 - (nutrientSums[current] * 100 / (dailyValues[current] * userFactor))).toFixed(2)
                    }
                ]
            }, []))
        }
    }, [nutrientSums])


    const createPieChartRow = (field) => {
        return (
            <Grid item xs={3}>
                <PieCard
                    dailyValues={dailyValues}
                    field={field}
                    nutrientSums={nutrientSums}
                    title={getPieChartName(field)}
                />
            </Grid>
        )
    }

    const createInfoRow = (field) => {
        const myArray = field.split(" ");
        const name = myArray.at(0).split(",");
        
        switch (name.at(0)) {
            case "Vitamin":
                return (
                    <grid>
                        <Typography
                            fontSize={20}
                            fontWeight="bold"
                            fontFamily="Montserrat"
                        >
                            {myArray.at(0)} {myArray.at(1)}
                        </Typography>
                        <p>Recommended Daily Intake: {Number(dailyValues[field] * factor).toFixed(2)} {myArray.at(-1)}</p>
                        <p>Current Intake: {Number(nutrientSums[field]).toFixed(2)} {myArray.at(-1)}</p>
                        <p>Remaining: {Math.max(Number((dailyValues[field] * factor) -(nutrientSums[field])).toFixed(2),0)} {myArray.at(-1)}</p>
                    </grid>
                )
            default: 
                return (
                    <grid>
                        <Typography
                            fontSize={20}
                            fontWeight="bold"
                            fontFamily="Montserrat"
                        >
                            {name.at(0)}
                        </Typography>
                        <p>Recommended Daily Intake: {Number(dailyValues[field] * factor).toFixed(2)} {myArray.at(-1)}</p>
                        <p>Current Intake: {Number(nutrientSums[field]).toFixed(2)} {myArray.at(-1)}</p>
                        <p>Remaining: {Math.max(Number((dailyValues[field] * factor) -(nutrientSums[field])).toFixed(2),0)} {myArray.at(-1)}</p>
                    </grid>
                )
        }
        
    }
    const handleClick1 = () => {
        changePage(1)  // change to food input
    }

    const handleClick2 = () => {
        changePage(3)  // change to food input
    }
    if (!nutrientSums) {
        return (
            <Grid container justifyContent="center" alignItems="center" height="100%" direction="column">
                <Typography
                    fontSize={50}
                    fontWeight="bold"
                    fontFamily="Montserrat"
                >
                    Add Food Item
                </Typography>
                <Button
                    variant="outlined"
                    sx={{ backgroundColor: "#2878DA", color: "white", padding: "10px 30px" }}
                    onClick={handleClick1}
                >
                    <Typography
                        fontSize={32}
                        fontWeight="bold"
                        fontFamily="Montserrat"
                    >
                        Food Input
                    </Typography>
                </Button>
            </Grid>
        )
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
        <>
            <Grid container xs={12} spacing={2} justifyContent="center">
                { pieChartFields.map(createPieChartRow) }
            </Grid>
            <Grid container xs={12} sx={{ mt: 3 }}>
                <BarCard data={barChartData} />
            </Grid>
            <Grid container xs={12} sx={{ mt: 3 }}>
                <CardContainer
                    direction="column"
                    container
                >
                    <Grid item>
                        <Typography
                            fontSize={30}
                            fontWeight="bold"
                            color="#000"
                        >
                            Nutrition Summary
                        </Typography>
                    </Grid>
                    <Grid item>
                        { pieChartFields.map(createInfoRow) }
                        { barChartFields.map(createInfoRow) }
                    </Grid>
                </CardContainer>
            </Grid>
        </>
    )
}

export default NutritionTracking

