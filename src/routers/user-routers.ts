import { getAllArts, getArtsByAuthor, getArtsByTitle, getUserArts } from "@/controllers/arts-Controller";
import { getArtsByUser, getUser } from "@/controllers/user-controller.ts";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const userRouter = Router();
userRouter.all("/*",authenticateToken)
userRouter.get("/", getUser);
userRouter.get("/userArts/:userId", getArtsByUser)
export { userRouter };
