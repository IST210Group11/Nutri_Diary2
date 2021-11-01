import mongoose from "mongoose";

const FDCSchema = new mongoose.Schema({ "Calcium, Ca MG": Number, 
"Carbohydrates G": Number, 
"Cholesterol MG": Number, 
"Copper, Cu MG": Number, 
"Energy KCAL": Number, 
"Fat G": Number, 
"Fiber G": Number, 
"Iron, Fe MG": Number, 
"Magnesium, Mg MG": Number, 
"Manganese, Mn MG": Number, 
"Potassium, K MG": Number, 
"Protein G": Number, 
"Sodium, Na MG": Number, 
"Sugars G": Number, 
"Vitamin A UG": Number, 
"Vitamin C MG": Number, 
"Vitamin D UG": Number, 
"Zinc, Zn MG": Number, 
"description": String }, { collection: "fdc" })

export default mongoose.models.FDC || mongoose.model('FDC', FDCSchema)