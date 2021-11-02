import dbConnect from "../../../utils/api/api.ts";
import User from '../../../entities/user'

export default async (req, res) => {
    await dbConnect()

    const { user_id } = req.body

    try {
        const hasUser = await User.findOne({ user_id }).exec()
        if (hasUser && hasUser.length <= 0) {
            const user = await User.create({ user_id })
            res.status(200).json({ data: user })
        } else {
            res.status(200).json({ data: hasUser })
        }
    } catch (e) {
        console.error(e)
    }

}