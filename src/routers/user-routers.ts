import { deleteUserArt, getArtsByUser, getUser, postUserArts } from "@/controllers/user-controller.ts";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const userRouter = Router();
userRouter.all("/*",authenticateToken)
userRouter.get("/", getUser);
userRouter.get("/userArts/:userId", getArtsByUser)
userRouter.post("/userArt/:artId",postUserArts)
userRouter.delete("/userArt/:artId",deleteUserArt)
export { userRouter };
