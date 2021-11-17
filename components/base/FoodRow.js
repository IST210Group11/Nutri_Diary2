import {Button, Grid, InputAdornment, styled, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useApi} from "./ApiProvider";
import {useAuthUser} from "./UserProvider";

const StyledButton = styled(Button)({
    backgroundColor: "#2878DA",
    padding: "5px 30px",
    "&:hover": {
        backgroundColor: "#1a5cad"
    }
})

const StyledRow = styled(Grid)({
    padding: "15px 0",
    borderBottom: "solid 2px rgba(0, 0, 0, 0.05)",
})

const FoodText = ({ text }) => <Typography sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} fontSize={16} fontWeight="500" fontFamily="Montserrat">{ text }</Typography>

const FoodRow = ({ food, type }) => {
    const [amount, setAmount] = useState(100)
    const { addFoodList, removeFoodList } = useApi()
    const { user_id } = useAuthUser()

    const {
        description,
        ["Energy KCAL"]: energy,
        ["Protein G"]: protein,
        ["Carbohydrates G"]: carbo,
        ["Fat G"]: fat
    } = food

    const onAmountChanged = (event) => {
        setAmount(event.target.value)
    }

    const onSubmit = async () => {
        try {
            if (type === "add") {
                await addFoodList(
                    user_id,
                    {
                        ...food,
                        "Amount in g": amount
                    }
                )
            } else if (type === "remove") {
                await removeFoodList(
                    user_id,
                    {
                        ...food
                    }
                )
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <StyledRow container columns={16} sx={{mt: 2}}>
            <Grid item xs={10}>
                <FoodText maxLines={2} text={description} />
            </Grid>
            <Grid item container xs={1} justifyContent="center">
                <FoodText text={energy} />
            </Grid>
            <Grid item container xs={1} justifyContent="center">
                <FoodText text={protein} />
            </Grid>
            <Grid item container xs={1} justifyContent="center">
                <FoodText text={carbo} />
            </Grid>
            <Grid item container xs={1} justifyContent="center">
                <FoodText text={fat} />
            </Grid>
            <Grid item container xs={1} justifyContent="center">
                {type === "add" ?
                    <TextField
                        variant="standard"
                        type="number"
                        value={amount}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">g</InputAdornment>
                        }}
                        onChange={onAmountChanged}
                    />
                    :
                    <FoodText text={`${food["Amount in g"]} g`}/>
                }
            </Grid>
            <Grid item container xs={1} justifyContent="center">
                <StyledButton
                    variant="text"
                    onClick={onSubmit}
                >
                    <Typography
                        sx={{ fontSize: 14, fonWeight: "bold", textTransform: "capitalize" }}
                        color="white"
                    >
                        { type === "add" ? "Add" : "Remove" }
                    </Typography>
                </StyledButton>
            </Grid>
        </StyledRow>
    )
}

export default FoodRow