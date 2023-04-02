
import { Router } from "express";
import { signUp } from "../controllers/singup-Controller";
import { createUserSchema } from "../schemas";
import { validateBody } from "../middlewares";

const signUpRouter = Router();

signUpRouter.post("/", validateBody(createUserSchema),signUp);

export { signUpRouter };
