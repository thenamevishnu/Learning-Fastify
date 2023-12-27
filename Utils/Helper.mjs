import { apiCall } from "../apiCall.mjs"

const createError = (err) => {
    return err.response?.data?.message || err.message
}

export const getRandomUser = async (gender=null, limit=null, format=null) => {
    try {
        const { data: response } = await apiCall.get(`?${gender ? `gender=${gender}&` : ``}${limit ? `results=${limit}&` : ``}format=${format ? format : `json`}`)
        return response
    } catch(err) {
        return createError(err) 
    }
}