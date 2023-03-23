import { signIn } from "@/controllers/signIn-Controller";
import { signUp } from "@/controllers/singup-Controller";
import { validateBody } from "@/middlewares";
import { createUserSchema } from "@/schemas";
import { Router } from "express";

const signUpRouter = Router();

signUpRouter.post("/", validateBody(createUserSchema),signUp);

export { signUpRouter };
