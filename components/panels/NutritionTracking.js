import React, {useCallback, useEffect, useState} from 'react'
import { PieChart, Pie, Label, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LabelList} from 'recharts'
import {
    Button,
    styled, 
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select, 
    Styled,
    TextField,
    Typography
} from "@mui/material";
import {useApi} from "../base/ApiProvider";

const COLORS = ['#FCCF3E', '#D3D3D3'];

const progress = [{name: "Progress",value: 60},{name: "Left",value: 40}]

const renderCustomizedLabel = (props) => {
    const { content, ...rest } = props;
  
    return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
  };



const NutritionTracking = () => {

    // Macronutrients
    const [Caloriessum, setCaloriesSum] = useState(0)
    const [CaloriessumDV, setCaloriesSumDV] = useState(0)
    const [Carbohydratesum, setCarbohydrateSum] = useState(0)
    const [CarbohydratesumDV, setCarbohydrateSumDV] = useState(0)
    const [Proteinsum, setProteinSum] = useState(0)
    const [ProteinsumDV, setProteinSumDV] = useState(0)
    const [Fatsum, setFatSum] = useState(0)
    const [FatsumDV, setFatSumDV] = useState(0)
    const { getNutrientSum } = useApi()
    const { getDVNutrient } = useApi()

    // Micronutrients
    const [Cholesterolsum, setCholesterolSum] = useState(0)
    const [CholesterolsumDV, setCholesterolSumDV] = useState(0)
    const [Sugarssum, setSugarsSum] = useState(0)
    const [SugarssumDV, setSugarsSumDV] = useState(0)
    const [Fibersum, setFiberSum] = useState(0)
    const [FibersumDV, setFiberSumDV] = useState(0)
    const [Calciumsum, setCalciumSum] = useState(0)
    const [CalciumsumDV, setCalciumSumDV] = useState(0)
    const [Coppersum, setCopperSum] = useState(0)
    const [CoppersumDV, setCopperSumDV] = useState(0)
    const [Ironsum, setIronSum] = useState(0)
    const [IronsumDV, setIronSumDV] = useState(0)
    const [Manganesesum, setManganeseSum] = useState(0)
    const [ManganesesumDV, setManganeseSumDV] = useState(0)
    const [Magnesiumsum, setMagnesiumSum] = useState(0)
    const [MagnesiumsumDV, setMagnesiumSumDV] = useState(0)
    const [Potassiumsum, setPotassiumSum] = useState(0)
    const [PotassiumsumDV, setPotassiumSumDV] = useState(0)
    const [Sodiumsum, setSodiumSum] = useState(0)
    const [SodiumsumDV, setSodiumSumDV] = useState(0)
    const [Zincsum, setZincSum] = useState(0)
    const [ZincsumDV, setZincSumDV] = useState(0)
    const [VitaminAsum, setVitaminASum] = useState(0)
    const [VitaminAsumDV, setVitaminASumDV] = useState(0)
    const [VitaminCsum, setVitaminCSum] = useState(0)
    const [VitaminCsumDV, setVitaminCSumDV] = useState(0)
    const [VitaminDsumDV, setVitaminDSumDV] = useState(0)
    const [VitaminDsum, setVitaminDSum] = useState(0)


    const action = async () => {
        try {
            // Macronutrients
            setCaloriesSum((await getNutrientSum()).data["Energy KCAL"])
            console.log(Caloriessum)
            setCaloriesSumDV((await getDVNutrient("Energy KCAL")).data.sum)
            setCarbohydrateSum((await getNutrientSum("Carbohydrates G")).data.sum)
            setCarbohydrateSumDV((await getDVNutrient("Carbohydrates G")).data.sum)
            setProteinSum((await getNutrientSum("Protein G")).data.sum)
            setProteinSumDV((await getDVNutrient("Protein G")).data.sum)
            setFatSum((await getNutrientSum("Fat G")).data.sum)
            setFatSumDV((await getDVNutrient("Fat G")).data.sum)

            // Micronutrients
            setCholesterolSum((await getNutrientSum("Cholesterol MG")).data.sum)
            setCholesterolSumDV((await getDVNutrient("Cholesterol MG")).data.sum)
            setSugarsSum((await getNutrientSum("Sugars G")).data.sum)
            setSugarsSumDV((await getDVNutrient("Sugars G")).data.sum)
            setFiberSum((await getNutrientSum("Fiber G")).data.sum)
            setFiberSumDV((await getDVNutrient("Fiber G")).data.sum)
            setCalciumSum((await getNutrientSum("Calcium, Ca MG")).data.sum)
            setCalciumSumDV((await getDVNutrient("Calcium, Ca MG")).data.sum)
            setCopperSum((await getNutrientSum("Copper, Cu MG")).data.sum)
            setCopperSumDV((await getDVNutrient("Copper, Cu MG")).data.sum)
            setIronSum((await getNutrientSum("Iron, Fe MG")).data.sum)
            setIronSumDV((await getDVNutrient("Iron, Fe MG")).data.sum)
            setManganeseSum((await getNutrientSum("Manganese, Mn MG")).data.sum)
            setManganeseSumDV((await getDVNutrient("Manganese, Mn MG")).data.sum)
            setMagnesiumSum((await getNutrientSum("Magnesium, Mg MG")).data.sum)
            setMagnesiumSumDV((await getDVNutrient("Magnesium, Mg MG")).data.sum)
            setPotassiumSum((await getNutrientSum("Potassium, K MG")).data.sum)
            setPotassiumSumDV((await getDVNutrient("Potassium, K MG")).data.sum)
            setSodiumSum((await getNutrientSum("Sodium, Na MG")).data.sum)
            setSodiumSumDV((await getDVNutrient("Sodium, Na MG")).data.sum)
            setZincSum((await getNutrientSum("Zinc, Zn MG")).data.sum)
            setZincSumDV((await getDVNutrient("Zinc, Zn MG")).data.sum)
            setVitaminASum((await getNutrientSum("Vitamin A UG")).data.sum)
            setVitaminASumDV((await getDVNutrient("Vitamin A UG")).data.sum)
            setVitaminCSum((await getNutrientSum("Vitamin C MG")).data.sum)
            setVitaminCSumDV((await getDVNutrient("Vitamin C MG")).data.sum)
            setVitaminDSum((await getNutrientSum("Vitamin D UG")).data.sum)
            setVitaminDSumDV((await getDVNutrient("Vitamin D UG")).data.sum)

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        action()
    }, []);

    const data = [
    
    {
        name: "Cholesterol MG",
        Progress: (Cholesterolsum*100/CholesterolsumDV).toFixed(2),
        Left: (100 - (Cholesterolsum*100/CholesterolsumDV))
    },
    {
        name: "Sugars G",
        Progress: (Sugarssum*100/SugarssumDV).toFixed(2),
        Left: (100 - (Sugarssum*100/SugarssumDV))
    },
    {
        name: "Fiber G",
        Progress: (Fibersum*100/FibersumDV).toFixed(2),
        Left: (100 - (Fibersum*100/FibersumDV))
    },
    {
        name: "Calcium, Ca MG",
        Progress: (Calciumsum*100/CalciumsumDV).toFixed(2),
        Left: (100 - (Calciumsum*100/CalciumsumDV))
    },
    {
        name: "Copper, Cu MG",
        Progress: (Coppersum*100/CoppersumDV).toFixed(2),
        Left: (100 - (Coppersum*100/CoppersumDV))
    },
    {
        name: "Iron, Fe MG",
        Progress: (Ironsum*100/IronsumDV).toFixed(2),
        Left: (100 - (Ironsum*100/IronsumDV))
    },
    {
        name: "Manganese, Mn MG",
        Progress: (Manganesesum*100/ManganesesumDV).toFixed(2),
        Left: (100 - (Manganesesum*100/ManganesesumDV))
    },
    {
        name: "Magnesium, Mg MG",
        Progress: (Magnesiumsum*100/MagnesiumsumDV).toFixed(2),
        Left: (100 - (Magnesiumsum*100/MagnesiumsumDV))
    },
    {
        name: "Potassium, K MG",
        Progress: (Potassiumsum*100/PotassiumsumDV).toFixed(2),
        Left: (100 - (Potassiumsum*100/PotassiumsumDV))
    },
    {
        name: "Sodium, Na MG",
        Progress: (Sodiumsum*100/SodiumsumDV).toFixed(2),
        Left: (100 - (Sodiumsum*100/SodiumsumDV))
    },
    {
        name: "Zinc, Zn MG",
        Progress: (Zincsum*100/ZincsumDV).toFixed(2),
        Left: (100 - (Zincsum*100/ZincsumDV))
    },
    {
        name: "Vitamin A UG",
        Progress: (VitaminAsum*100/VitaminAsumDV).toFixed(2),
        Left: (100 - (VitaminAsum*100/VitaminAsumDV))
    },
    {
        name: "Vitamin C UG",
        Progress: (VitaminCsum*100/VitaminCsumDV).toFixed(2),
        Left: (100 - (VitaminCsum*100/VitaminCsumDV))
    },
    {
        name: "Vitamin D UG",
        Progress: (VitaminDsum*100/VitaminDsumDV).toFixed(2),
        Left: (100 - (VitaminDsum*100/VitaminDsumDV))
    }


    ];

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div class="center" >
                        <p>Calories:</p>
                    </div>
                    <PieChart width={750} height={250}>
                        <Pie data = {[{name: "Progress",value: (Caloriessum*100/CaloriessumDV)},{name: "Left",value: (100 - (Caloriessum*100/CaloriessumDV))}]}
                        dataKey="value" 
                        nameKey="name" 
                        startAngle={90}
                        endAngle = {450}
                        cx="50%" 
                        cy="50%" 
                        innerRadius={60} 
                        fill="#2878DA" >
                            {
                            progress.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                            <Label value = {`${(Caloriessum*100/CaloriessumDV).toFixed(1)}%`} position="center" fontSize="28" />
                        </Pie>
                    </PieChart>
                </Grid>
                <Grid item xs={6}>
                    <div class="center">
                        <p>Carbohydrates:</p>
                    </div>
                    <PieChart width={750} height={250}>
                        <Pie data = {[{name: "Progress",value: (Carbohydratesum*100/CarbohydratesumDV)},{name: "Left",value: (100 - (Carbohydratesum*100/CarbohydratesumDV))}]}
                        dataKey="value" 
                        nameKey="name" 
                        startAngle={90}
                        endAngle = {450}
                        cx="50%" 
                        cy="50%" 
                        innerRadius={60} 
                        fill="#2878DA" >
                            {
                            progress.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                            <Label value = {`${(Carbohydratesum*100/CarbohydratesumDV).toFixed(1)}%`} position="center" fontSize="28" />
                        </Pie>
                    </PieChart>
                </Grid>
                <Grid item xs={6}>
                    <div class="center">
                        <p>Protein:</p>
                    </div>
                    <PieChart width={750} height={250}>
                        <Pie data = {[{name: "Progress",value: (Proteinsum*100/ProteinsumDV)},{name: "Left",value: (100 - (Proteinsum*100/ProteinsumDV))}]}
                        dataKey="value" 
                        nameKey="name" 
                        startAngle={90}
                        endAngle = {450}
                        cx="50%" 
                        cy="50%" 
                        innerRadius={60} 
                        fill="#2878DA" >
                            {
                            progress.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                            <Label value = {`${(Proteinsum*100/ProteinsumDV).toFixed(1)}%`} position="center" fontSize="28" />
                        </Pie>
                    </PieChart>
                </Grid>
                <Grid item xs={6}>
                    <div class="center">
                        <p>Fat:</p>
                    </div>
                    <PieChart width={750} height={250}>
                        <Pie data = {[{name: "Progress",value: (Fatsum*100/FatsumDV)},{name: "Left",value: (100 - (Fatsum*100/FatsumDV))}]}
                        dataKey="value" 
                        nameKey="name" 
                        startAngle={90}
                        endAngle = {450}
                        cx="50%" 
                        cy="50%" 
                        innerRadius={60} 
                        fill="#2878DA" >
                            {
                            progress.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                            <Label value = {`${(Fatsum*100/FatsumDV).toFixed(1)}%`} position="center" fontSize="28" />
                        </Pie>
                    </PieChart>
                </Grid>
            </Grid>
            
            <div className="content c-white">
                <h1>Micronutrients: </h1>
                <ResponsiveContainer height={500} width={"100%"}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ left: 50, right: 50 }}
                    stackOffset="expand"
                >
                    <XAxis hide type="number" />
                    <YAxis
                    type="category"
                    dataKey="name"
                    stroke="#000000"
                    fontSize="12"
                    font
                    />
                    <Tooltip />
                    <Bar dataKey="Progress" fill="#0DAB76" stackId="a">
                    <LabelList
                        dataKey="Progress"
                        position="center"
                        content={renderCustomizedLabel}
                    />
                    </Bar>
                    <Bar dataKey="Left" fill="#D3D3D3" stackId="a">
                    
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        
    )
}

export default NutritionTracking

