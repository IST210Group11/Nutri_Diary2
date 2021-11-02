import NutritionCard from "./NutritionCard";
import PieChartMacro from "./PieChartMacro";
import {useAuthUser} from "./UserProvider";

const PieCard = ({ dailyValues, nutrientSums, field, title }) => {
    const { factor } = useAuthUser()

    return (
        <NutritionCard title={title}>
            <PieChartMacro
              progress={nutrientSums[field] * 100 / (dailyValues[field] * factor)}
            />
        </NutritionCard>
    )
}

export default PieCard