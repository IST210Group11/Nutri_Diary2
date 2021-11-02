import {Grid, styled, Typography} from "@mui/material"
import PieChartMacro from "./PieChartMacro";

const CardContainer = styled(Grid)({
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.08)",
  borderRadius: "20px",
  padding: "10px 10px",
})

const NutritionCard = ({ title, children }) => {
  return (
    <CardContainer
        direction="column"
        container
    >
      <Grid item>
        <Typography
          fontSize={18}
          fontWeight="bold"
          color="#000"
        >
          { title }
        </Typography>
      </Grid>
      <Grid item>
        { children }
      </Grid>
    </CardContainer>
  )
}

export default NutritionCard