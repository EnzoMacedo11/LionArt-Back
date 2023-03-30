import { getAllArts, getArtsByAuthor, getArtsByTitle, getUserArts } from "@/controllers/arts-Controller";
import { getUser } from "@/controllers/user-controller.ts";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const userRouter = Router();
userRouter.all("/*",authenticateToken)
userRouter.get("/", getUser);
export { userRouter };
