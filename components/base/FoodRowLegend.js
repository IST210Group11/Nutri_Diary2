import {Grid, Typography} from "@mui/material";

const LegendText = ({ text }) => <Typography color="#a0a0a0" fontSize={16} fontWeight="500" fontFamily="Montserrat">{ text }</Typography>

const FoodRowLegend = () => {
    return (
        <Grid container columns={16}>
            <Grid item xs={10} justifyContent="flex_start" container>
                <LegendText text="Description" />
            </Grid>
            <Grid item xs={1} justifyContent="center" container>
                <LegendText text="Calories" />
            </Grid>
            <Grid item xs={1} justifyContent="center" container>
                <LegendText text="Protein" />
            </Grid>
            <Grid item xs={1} justifyContent="center" container>
                <LegendText text="Carbohydrates" />
            </Grid>
            <Grid item xs={1} justifyContent="center" container>
                <LegendText text="Fat" />
            </Grid>
            <Grid item xs={1} justifyContent="center" container>
                <LegendText text="Amount" />
            </Grid>
            <Grid item xs={1} justifyContent="center" container>
                <LegendText text="Action" />
            </Grid>
        </Grid>
    )
}

export default FoodRowLegend