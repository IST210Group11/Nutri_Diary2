import {EntitySchema} from "typeorm";

export default new EntitySchema({
    name: "DailyValues",
    tableName: "DailyValuesTable",
    columns: {
        description: {
            type: "varchar",
            primary: true
        },
        "Energy KCAL": {
            type: "int"
        },
        "Protein G": {
            type: "int"
        },
        "Carbohydrates G": {
            type: "int"
        },
        "Fat G": {
            type: "int"
        },
        "Cholesterol MG": {
            type: "int"
        },
        "Sugars G": {
            type: "int"
        },
        "Fiber G": {
            type: "int"
        },
        "Calcium, Ca MG": {
            type: "int"
        },
        "Copper, Cu MG": {
            type: "int"
        },
        "Iron, Fe MG": {
            type: "int"
        },
        "Manganese, Mn MG": {
            type: "int"
        },
        "Magnesium, Mg MG": {
            type: "int"
        },
        "Potassium, K MG": {
            type: "int"
        },
        "Sodium, Na MG": {
            type: "int"
        },
        "Zinc, Zn MG": {
            type: "int"
        },
        "Vitamin A UG": {
            type: "int"
        },
        "Vitamin C MG": {
            type: "int"
        },
        "Vitamin D UG": {
            type: "int"
        }
    }
})