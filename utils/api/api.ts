import DailyValues from "../../entities/DailyValues";
import finaltable from "../../entities/finaltable";
import FoodList from '../../entities/FoodList';
import Cors from 'cors';
import {Connection, createConnection, getConnection, getConnectionOptions, getRepository} from "typeorm";

const initMiddleware = (middleware) => (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
        if (result instanceof Error) return reject(result);
        else return resolve(result);
    })
})

export const cors = initMiddleware(Cors({ origin: "*", methods: ["GET", "POST", "OPTIONS"]}));

export const connect = async () => {
    try {
        const connection = getConnection()
        await connection.close()
    } catch (e) {
        console.error(e)
    }
    const connectionOptions = await getConnectionOptions()
    const options: any = {
        ...connectionOptions,
        entities: [DailyValues, finaltable, FoodList]
    }
    return await createConnection(options)
}

export const getRepo = (connection: Connection, repo: "DailyValues" | "FDC" | "FoodList") => {
    switch (repo) {
        case "DailyValues":
            return getRepository(DailyValues)
        case "FDC":
            return getRepository(finaltable)
        case "FoodList":
            return getRepository(FoodList)
    }
}