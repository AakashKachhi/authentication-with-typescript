import express from "express";
import type { Express } from "express";
import { authRoute } from "./auth/route";
import { authenticationMiddleware } from "./auth/middleware/auth.middleware";

export function createApplication() : Express {
    const app = express()

    // Middlewares
    app.use(express.json())
    app.use(authenticationMiddleware())

    // Routes
    app.use("/api/auth", authRoute)

    app.get("/", (req, res) => {
        return res.status(200).json({message: "This is chaicode auth server"})
    })

    

    return app
}