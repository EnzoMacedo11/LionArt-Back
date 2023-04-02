
import { Router } from "express";
import { deleteUserArt, getArtsByUser, getUser } from "../controllers/user-controller.ts";
import { postUserArts } from "../controllers/arts-Controller";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const userRouter = Router();
userRouter.all("/*",authenticateToken)
userRouter.get("/", getUser);
userRouter.get("/userArts/:userId", getArtsByUser)
userRouter.post("/userArt/:artId",postUserArts)
userRouter.delete("/userArt/:artId",deleteUserArt)
export { userRouter };
