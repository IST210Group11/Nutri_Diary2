import {connect, getRepo} from "../../../utils/api/api.ts";
import FoodList from "../../../entities/FoodList";

export default async (req, res) => {
    if (req.method === "POST") {
        await cors(req, res);
        const connection = await connect()
        const foodListRepo = await getRepo(connection, "FoodList")

        const { ...body } = req.body
        const newEntry = foodListRepo.create(body)

        const data = await foodListRepo.save(newEntry)
        res.status(200).json({ data })
    }


}