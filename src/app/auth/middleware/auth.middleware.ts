import {Request, Response, NextFunction} from "express"
import { verifyToken } from "../utils/jwt.utils"

export function authenticationMiddleware () {
    return function (req: Request, res: Response, next: NextFunction) {
        const header = req.headers["authorization"]
        if(!header) next()

        if(!header?.startsWith("Bearer")) {
            return res.status(400).json({error: "authorization header must start with Bearer and following token"})
        }
        
        const token = header.split(" ")[1]
        if(!token) return res.status(400).json({error: "authorization header must start with Bearer and following token"})
        
        const user = verifyToken(token)

        // @ts-ignore
        req.user = user

        next()
    }
}

export function restrictToAuthenticatedUser() {
    return function (req: Request, res: Response, next: NextFunction) {
        // @ts-ignore
        if(!req.user) return res.json(401).json({error: "Authorization Required"})
        return next()
    }
}