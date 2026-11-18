import express from "express"
import { Router } from "express"

import AuthenticationController from "./controller"

const authenticationController = new AuthenticationController()

export const authRoute: Router = express.Router()

authRoute.post(
  "/signup",
  authenticationController.handleSignup.bind(authenticationController),
)

authRoute.post("/signin", authenticationController.handleSignin.bind(authenticationController))
