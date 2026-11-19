import jwt from "jsonwebtoken"
export interface UserTokenPayload {
    id: string
}

const JWT_SECRET = "myjwtsecret"

export function createToken (payload: UserTokenPayload) {
    const token = jwt.sign(payload, JWT_SECRET)
    return token
}
export function verifyToken (token: string) {
    try {
        const payload = jwt.verify(token, JWT_SECRET) as UserTokenPayload
        return payload
    } catch (error) {
        return null
    }
}