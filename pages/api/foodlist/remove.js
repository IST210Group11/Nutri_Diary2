// import {connect, getRepo,cors} from "../../../utils/api/api.ts";
// import {getRepository, Like, SUM} from "typeorm";
// import FoodList from "../../../entities/FoodList";


// export default async (req, res) => {
//     if (req.method === "POST") {
//         const connection = await connect()
//         const foodListRepo = await getRepo(connection, "FoodList")
//         const { description } = req.body
        

//         const { ...body } = req.body
//         console.log(body)
//         const newEntry = foodListRepo.create(body)

//         const data = await foodListRepo.delete(newEntry)
//         res.status(200).json({ data })

        
//     }
// }