import { Cell, Label, Pie, PieChart } from "recharts";

const COLORS = ['#DA291C', '#FFC72C'];
const progressLabel = [{name: "Progress",value: 60},{name: "Left",value: 40}]

const PieChartMacro = ({ progress }) => {
  // const progress = (nutrientSums[field]*100/dailyValues[field])

  return (
    <PieChart width={250} height={250}>
        <Pie data = {[{name: "Progress",value: Math.min(progress,100)},{name: "Left",value: (100 - Math.min(progress,100))}]}
        dataKey="value" 
        nameKey="name" 
        startAngle={90}
        endAngle = {450}
        cx="50%" 
        cy="50%" 
        innerRadius={60} 
        fill="#2878DA" >
            {
              progressLabel.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            <Label value = {`${progress.toFixed(1)}%`} position="center" fontSize="28" />
        </Pie>
    </PieChart>
  )
}

export default PieChartMacro