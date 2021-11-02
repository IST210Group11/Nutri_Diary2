import dbConnect from "../../../utils/api/api.ts";
import foodlist from '../../../entities/FoodList2';


export default async (req, res) => {
    await dbConnect()

    const nutrient  = req.body
    try {
        const data = await foodlist.aggregate([{
            "$group" : { 
                "_id" : null, 
                "Protein G" : { 
                    "$sum" : { 
                        "$multiply" : ["$Protein G", "$Amount in g", 0.01]
                    }
                },
                "Carbohydrates G" : { 
                    "$sum" : { 
                        "$multiply" : ["$Carbohydrates G", "$Amount in g", 0.01]
                    }
                },
                "Energy KCAL" : { 
                    "$sum" : { 
                        "$multiply" : ["$Energy KCAL", "$Amount in g", 0.01]
                    }
                },
                "Fat G" : { 
                    "$sum" : { 
                        "$multiply" : ["$Fat G", "$Amount in g", 0.01]
                    }
                },
                "Cholesterol MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Cholesterol MG", "$Amount in g", 0.01]
                    }
                },
                "Sugars G" : { 
                    "$sum" : { 
                        "$multiply" : ["$Sugars G", "$Amount in g", 0.01]
                    }
                },
                "Fiber G" : { 
                    "$sum" : { 
                        "$multiply" : ["$Fiber G", "$Amount in g", 0.01]
                    }
                },
                "Calcium, Ca MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Calcium, Ca MG", "$Amount in g", 0.01]
                    }
                },
                "Copper, Cu MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Copper, Cu MG", "$Amount in g", 0.01]
                    }
                },
                "Iron, Fe MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Iron, Fe MG", "$Amount in g", 0.01]
                    }
                },
                "Manganese, Mn MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Manganese, Mn MG", "$Amount in g", 0.01]
                    }
                },
                "Magnesium, Mg MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Magnesium, Mg MG", "$Amount in g", 0.01]
                    }
                },
                "Potassium, K MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Potassium, K MG", "$Amount in g", 0.01]
                    }
                },
                "Sodium, Na MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Sodium, Na MG", "$Amount in g", 0.01]
                    }
                },
                "Zinc, Zn MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Zinc, Zn MG", "$Amount in g", 0.01]
                    }
                },
                "Vitamin A UG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Vitamin A UG", "$Amount in g", 0.01]
                    }
                },
                "Vitamin C MG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Vitamin C MG", "$Amount in g", 0.01]
                    }
                },
                "Vitamin D UG" : { 
                    "$sum" : { 
                        "$multiply" : ["$Vitamin D UG", "$Amount in g", 0.01]
                    }
                }
            }
        }]);
        
        res.status(200).json({ data })
    } catch (e) {
        console.error(e)
    }
}
