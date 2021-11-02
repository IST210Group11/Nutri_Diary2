import React, {createContext, useContext, useMemo} from 'react'
import axios from "axios";

const ApiContext = createContext({})

const ApiProvider = ({ children }) => {
    const api = axios.create({
        baseURL: process.env.BASE_URL + "/api"
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
            return (await api.get("/dailyvalues/DVNutrient", {
                description
            })).data
        } catch (e) {
            console.error(e)
        }
    }

    const getFoodList = async (user_id) => {
        try {
            return (await api.get(`/foodlist/${user_id}`)).data
        } catch (e) {
            console.error(e)
        }
    }

    const addFoodList = async (user_id, description) => {
        try {
            return (await api.post("/foodlist/create", {user_id, description})).data
        } catch (e) {
            console.error(e)
        }
    }

    const removeFoodList = async (user_id, description) => {
        try {
            return (await api.post("/foodlist/remove", {user_id, description})).data
        } catch (e) {
            console.error(e)
        }
    }


    const getNutrientSum = async (user_id) => {
        try {
            return (await api.get(`/foodlist/nutrientsum/${user_id}`)).data
        } catch (e) {
            console.error(e)
        }
    }

    const createUser = async (user_id) => {
        try {
            return (await api.post("/user", { user_id })).data
        } catch (e) {
            console.error(e)
        }
    }

    const getUser = async (user_id) => {
        try {
            return (await api.get(`/user/${user_id}`)).data
        } catch(e) {
            console.error(e)
        }
    }

    const updateUserSpecification = async (user_id, specification) => {
        try {
            return (await api.post("/user/specification", { user_id, specification })).data
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
        getDVNutrient,
        createUser,
        getUser,
        updateUserSpecification
    }), [
        api,
        getDescriptions,
        getDailyValues,
        getFoodList,
        addFoodList,
        removeFoodList,
        getNutrientSum,
        getDVNutrient,
        createUser,
        getUser,
        updateUserSpecification
    ])

    return (
        <ApiContext.Provider value={value}>
            { children }
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)
export default ApiProvider