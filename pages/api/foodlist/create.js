import dbConnect from "../../../../utils/api/api.ts";
import foodlist from '../../../entities/FoodList2';

export default async (req, res) => {
    if (req.method === "POST") {
        await dbConnect()

        const { description } = req.body

        try {
            const data = await foodlist.insertOne({ ...description }).exec()


            // const data = await getRepo(connection, "FDC")
            //     .find({
            //         where: {
            //             description: Like(`%${description}%`),
            //         },
            //         take: 20
            //     })
            res.status(200).json({ data })
        } catch (e) {
            console.error(e)
        }
    
    }
}