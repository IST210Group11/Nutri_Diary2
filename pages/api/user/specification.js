import dbConnect from "../../../utils/api/api.ts";
import User from '../../../entities/user'

export default async (req, res) => {
    const { user_id, specification } = req.body
    const { height, weight } = specification
    
    const factor = Math.min((Math.max(((height / 70) * (weight / 180)),0.5)),2)
    console.log("FACTOR", factor)

    await dbConnect()

    try {
        const user = await User.findOneAndUpdate({ user_id }, { ...specification, factor }, { upsert: true, new: true }).exec()
        console.log(user)
        res.status(200).json({ data: user })
    } catch (e) {
        console.error(e)
    }

}