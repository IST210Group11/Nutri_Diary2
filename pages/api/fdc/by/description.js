import dbConnect from "../../../../utils/api/api.ts";
import {getRepository, Like} from "typeorm";
import finaltable from "../../../../entities/finaltable";

import FDC from '../../../../entities/fdc';

export default async (req, res) => {
    if (req.method === "POST") {
        await dbConnect()

        const { description } = req.body

        try {
            // const data = await FDC.find({ description: new RegExp(description), '$options' : 'i' }).exec()
            const data = await FDC.find({description: {$regex: description, $options: 'i'}}).exec()


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