import {createServer} from "node:http";

import {createApplication} from "./app"

async function main() {
    try {
        const server = createServer(createApplication())
        const PORT : number = 8080 

        server.listen(PORT, () => {
            console.log(`Http Server is running on ${PORT} port`)
        })
    } catch (error) {
        console.log("Error starting the http sever")
        throw error
    }
}

main()