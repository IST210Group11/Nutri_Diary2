import {connect, getRepo} from "../../../utils/api/api.ts";
import {getRepository, Like, SUM} from "typeorm";
import FoodList from "../../../entities/FoodList";


export default async (req, res) => {
    if (req.method === "POST") {
        await cors(req, res);
        const connection = await connect()

        const { description } = req.body

        const data = await getRepo(connection, "FoodList")
            .createQueryBuilder("FoodList")
            .select(`SUM(FoodList.${description})`, "sum")
            .getRawOne(); 

        res.status(200).json({ data })
    }
}