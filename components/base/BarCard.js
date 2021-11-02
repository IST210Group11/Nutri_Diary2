import NutritionCard from "./NutritionCard";
import {Bar, Label, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, LabelList} from "recharts";
import React from "react";

const renderCustomizedLabel = (props) => {
    const { content, ...rest } = props;

    return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
  };

const BarCard = ({ data }) => {
    return (
        <NutritionCard title="Micronutrients">
            <ResponsiveContainer height={500} width={"100%"}>
                 <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ left: 40, right: 40 }}
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
        </NutritionCard>
    )
}

export default BarCard