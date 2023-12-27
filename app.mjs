import fastify from "fastify"
import apiRoute from "./Routes/api.route.mjs"

const app = fastify()

app.register(apiRoute, {
    prefix: "/api"
})

app.listen({
    port: 4000
}, (err) => {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        console.log("Server listening on port ", 4000);
    }
})