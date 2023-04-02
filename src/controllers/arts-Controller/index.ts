
import { Request, Response } from "express";
import httpStatus from "http-status";
import artsService from "../../service/arts-service";
import { AuthenticatedRequest } from "../../middlewares";

export async function getAllArts(req: Request, res: Response) {
  try {
    const result = await artsService.getAllArts();

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({error});
  }
}

export async function getAllAuthors(req: Request, res: Response) {
  try {
    const result = await artsService.getAllAuthors();

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({error});
  }
}

export async function getAllTypes(req: Request, res: Response) {
  try {
    const result = await artsService.getAllTypes();

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({error});
  }
}
export async function getArtsByTitle(req: Request, res: Response){
    const {title} = req.params;
    try{
        const result = await artsService.getArtsByTitle(title)
    return res.status(httpStatus.OK).send(result);
} catch (error) {
  return res.status(httpStatus.UNAUTHORIZED).send({error});
}
}

export async function getArtsById(req: Request, res: Response){
  const {id} = req.params;
  try{
      const result = await artsService.getArtsById(Number(id))
  return res.status(httpStatus.OK).send(result);
} catch (error) {
return res.status(httpStatus.UNAUTHORIZED).send({error});
}
}

export async function getArtsByAuthor(req: Request, res: Response){
    const {author} = req.params;
    try{
        const result = await artsService.getArtsByAuthor(author)
    return res.status(httpStatus.OK).send(result);
} catch (error) {
  return res.status(httpStatus.UNAUTHORIZED).send({error});
}
}

export async function getArtsByType(req: Request, res: Response){
  const {type} = req.params;
  try{
      const result = await artsService.getArtsByType(type)
  return res.status(httpStatus.OK).send(result);
} catch (error) {
return res.status(httpStatus.UNAUTHORIZED).send({error});
}
}

export async function getUserArts(req:AuthenticatedRequest, res: Response) {
    try{
        const {userId} = req
        const result = await artsService.getUserArts(userId)
        
        return res.status(httpStatus.OK).send(result);
    }
    catch(error){
        return res.status(httpStatus.UNAUTHORIZED).send({error});
    }
    
}

export async function postUserArts(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const { artId } = req.params; 
    const userArts = await artsService.createUserArts(Number(userId), Number(artId));
    res.status(httpStatus.OK).send(userArts);
  } catch (error) {
    if (error.name === "Bad Request") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}