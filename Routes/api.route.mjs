import apiController from "../Controller/api.controller.mjs"

const routes = async (fastify, options) => {
    
    fastify.get("/", apiController.getRandom)

}

export default routes