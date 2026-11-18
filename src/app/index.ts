import express from "express";
import type { Express } from "express";
import { resolve } from "node:dns";

export function createApplication() : Express {
    const app = express()

    // Middlewares

    app.get("/", (req, res) => {
        return res.status(200).json({message: "This is chaicode auth server"})
    })

    // Routes

    return app
}