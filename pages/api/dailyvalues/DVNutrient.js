// import {connect, getRepo, cors} from "../../../utils/api/api.ts";
// import {getRepository, Like, SUM} from "typeorm";
// import FoodList from "../../../entities/DailyValues";


// export default async (req, res) => {
//     if (req.method === "POST") {
//         const connection = await connect()

//         const { description } = req.body


//         const data = await getRepo(connection, "DailyValues")
//             .createQueryBuilder("DailyValues")
//             .select(`SUM(DailyValues.${description})`, "sum")
//             .getRawOne(); 

//         res.status(200).json({ data })
//     }
// }