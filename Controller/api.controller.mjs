import { getRandomUser } from "../Utils/helper.mjs"

const getRandom = async (req, res) => {
    try {
        const { gender, limit, format } = req.query
        const response = await getRandomUser(gender, limit, format)
        return res.send(response)
    } catch (err) {
        return res.send(err.message)
    }
}

export default {
    getRandom
}