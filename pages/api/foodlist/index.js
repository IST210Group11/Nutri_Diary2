import {connect, getRepo} from "../../../utils/api/api.ts";

export default async (req, res) => {
    await cors(req, res);
    const connection = await connect()
    const foodListRepo = getRepo(connection, "FoodList")

    const data = await foodListRepo.find()

    res.status(200).json({ data })
}