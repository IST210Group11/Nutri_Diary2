import React, {useCallback, useEffect, useState} from 'react'
import {
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select, styled,
    TextField,
    Typography
} from "@mui/material";
import {useApi} from "../base/ApiProvider";
import {useAuthUser} from "../base/UserProvider";


const StyledButton = styled(Button)({
    backgroundColor: "#2878DA",
    padding: "5px 40px",
    "&:hover": {
        backgroundColor: "#1a5cad"
    }
})




const UserSpecification = ({ index }) => {
    const { height,gender,age,weight} = useAuthUser()
    // const [gender, setGender] = useState("male")
    // const [height, setHeight] = useState(70)
    // const [age, setAge] = useState(20)
    // const [weight ,setWeight] = useState(180)
    const [gender1, setGender] = useState(gender)
    const [height1, setHeight] = useState(height)
    const [age1, setAge] = useState(age)
    const [weight1 ,setWeight] = useState(weight)
    const { updateUserSpecification } = useApi()
    const { user_id } = useAuthUser()

    const onChangeGender = (event) => {
        setGender(event.target.value)
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value)
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const onSubmit =async () => {
        try {
            console.log(user_id)
            if (user_id)
                await updateUserSpecification(user_id, { gender1, height1, age1, weight1 })       
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    value={height1}
                    onChange={onChangeHeight}
                    label="Height"
                    variant="outlined"
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">inches</InputAdornment>
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    value={age1}
                    onChange={onChangeAge}
                    label="Age"
                    variant="outlined"
                    type="number"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    value={weight1}
                    onChange={onChangeWeight}
                    label="Weight"
                    variant="outlined"
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">lbs</InputAdornment>
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel id="gender-input">Gender</InputLabel>
                    <Select
                        labelId="gender-input"
                        value={gender1}
                        onChange={onChangeGender}
                        label="Gender"
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item container xs={12} justifyContent="center">
                <StyledButton
                    variant="text"
                    onClick={onSubmit}
                >
                    <Typography
                        sx={{ fontSize: 18, fonWeight: "bold", textTransform: "capitalize" }}
                        color="white"
                    >
                        Submit
                    </Typography>
                </StyledButton>
            </Grid>
        </Grid>
    )
}

export default UserSpecification