import { Router } from "express";
import { signIn } from "../controllers/signIn-Controller";
import { signInSchema } from "../schemas";
import { validateBody } from "../middlewares";

const signInRouter = Router();

signInRouter.post("/", validateBody(signInSchema), signIn);

export { signInRouter };
