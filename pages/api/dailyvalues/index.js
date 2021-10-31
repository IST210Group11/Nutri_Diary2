import {connect, getRepo} from "../../../utils/api/api.ts";

export default async (req, res) => {
    await cors(req, res);
    const connection = await connect()
    const dvRepo = getRepo(connection, "DailyValues")

    const data = await dvRepo.find()

    res.status(200).json({ data })
}