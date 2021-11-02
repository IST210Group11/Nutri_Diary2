import dbConnect from "../../../utils/api/api.ts";
import foodlist from '../../../entities/FoodList2';

export default async (req, res) => {
    if (req.method === "POST") {
        await dbConnect()

        const { description, user_id } = req.body

        try {
            const data = await new Promise((resolve, reject) => {
                foodlist.create({ ...description, user_id }, (err, doc) => {
                    if (err) return reject(err)
                    else return resolve(doc)
                })
            })
            res.status(200).json({ data })
        } catch (e) {
            console.error(e)
        }
    
    }
}