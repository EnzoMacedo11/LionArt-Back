import { getAllArts, getAllAuthors, getAllTypes, getArtsByAuthor, getArtsById, getArtsByTitle, getArtsByType, getUserArts, postUserArts } from "@/controllers/arts-Controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const artsRouter = Router();
artsRouter.all("/*",authenticateToken)
artsRouter.get("/", getAllArts);
artsRouter.get("/title/:title",getArtsByTitle)
artsRouter.get("/art/:id",getArtsById)
artsRouter.get("/author/:author",getArtsByAuthor)
artsRouter.get("/authors/",getAllAuthors)
artsRouter.get("/types/",getAllTypes)
artsRouter.get("/type/:type",getArtsByType)
artsRouter.get("/userArts/",getUserArts)
artsRouter.post("/userArts/:artId",postUserArts)
export { artsRouter };
