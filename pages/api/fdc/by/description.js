import {connect, getRepo, cors} from "../../../../utils/api/api.ts";
import {getRepository, Like} from "typeorm";
import finaltable from "../../../../entities/finaltable";
export default async (req, res) => {
    if (req.method === "POST") {
        await cors(req, res);
        const connection = await connect()

        const { description } = req.body

        try {
            const data = await getRepo(connection, "FDC")
                .find({
                    where: {
                        description: Like(`%${description}%`),
                    },
                    take: 20
                })
            res.status(200).json({ data })
        } catch (e) {
            console.error(e)
        }
    
    }
}