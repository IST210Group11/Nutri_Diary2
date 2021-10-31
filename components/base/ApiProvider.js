import React, {createContext, useContext, useMemo} from 'react'
import axios from "axios";

const ApiContext = createContext({})

const ApiProvider = ({ children }) => {
    const api = axios.create({
        baseURL: "https://nutri-diary2.vercel.app" + "/api"
    })

    const getDescriptions = async (description) => {
        try {
            return (await api.post("/fdc/by/description", {
                description
            })).data
        } catch (e) {
            console.error(e)
        }
    }

    const getDailyValues = async () => {
        try {
            return (await api.get("/dailyvalues")).data
        } catch (e) {
            console.error(e)
        }
    }

    const getDVNutrient = async (description) => {
        try {
            return (await api.post("/dailyvalues/DVNutrient", {
                description
            })).data
        } catch (e) {
            console.error(e)
        }
    }

    const getFoodList = async () => {
        try {
            return (await api.get("/foodlist")).data
        } catch (e) {
            console.error(e)
        }
    }

    const addFoodList = async (data) => {
        try {
            return (await api.post("/foodlist/create", data)).data
        } catch (e) {
            console.error(e)
        }
    }

    const removeFoodList = async (data) => {
        try {
            return (await api.post("/foodlist/remove", data)).data
        } catch (e) {
            console.error(e)
        }
    }


    const getNutrientSum = async (description) => {
        try {
            return (await api.post("/foodlist/nutrientsum", {
                description
            })).data
        } catch (e) {
            console.error(e)
        }
    }

    const value = useMemo(() => ({
        api,
        getDescriptions,
        getDailyValues,
        getFoodList,
        addFoodList,
        removeFoodList,
        getNutrientSum,
        getDVNutrient
    }), [
        api,
        getDescriptions,
        getDailyValues,
        getFoodList,
        addFoodList,
        removeFoodList,
        getNutrientSum,
        getDVNutrient
    ])

    return (
        <ApiContext.Provider value={value}>
            { children }
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)
export default ApiProvider