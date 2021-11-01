import dbConnect from "../../../utils/api/api.ts";
import foodlist from '../../../entities/FoodList2';


export default async (req, res) => {
    await dbConnect()

    const { description } = req.body

    try {
        const data = await foodlist.find()


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