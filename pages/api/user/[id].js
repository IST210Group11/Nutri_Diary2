import dbConnect from "../../../utils/api/api.ts";
import User from '../../../entities/user'

export default async (req, res) => {
    const { id } = req.query

    await dbConnect()

    try {
        const data = await User.find({ user_id: id }).exec()
        res.status(200).json({ data })
    } catch (e) {
        console.error(e)
    }

}