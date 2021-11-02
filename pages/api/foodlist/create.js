import dbConnect from "../../../utils/api/api.ts";
import foodlist from '../../../entities/FoodList2';

export default async (req, res) => {
    if (req.method === "POST") {
        await dbConnect()

        const { description, user_id } = req.body

        try {
            const data = await foodlist.findOneAndUpdate({ user_id, description: new RegExp(description.description) }, { ...description, user_id }, { upsert: true, new: true }).exec()
            res.status(200).json({ data })
        } catch (e) {
            console.error(e)
        }
    
    }
}