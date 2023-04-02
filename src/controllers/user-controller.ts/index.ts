import { AuthenticatedRequest } from "@/middlewares";
import userService from "@/service/signup-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req
  try {
    const result = await userService.getUser(userId);

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({error});
  }
}

export async function getArtsByUser(req: Request, res: Response){
  const {userId} = req.params;
  try{
      const result = await userService.getArtsByUser(Number(userId))
  return res.status(httpStatus.OK).send(result);
} catch (error) {
return res.status(httpStatus.UNAUTHORIZED).send({error});
}
}


export async function postUserArts(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const { artId } = req.params; 
    const userArts = await userService.createUserArts(Number(userId), Number(artId));
    res.status(httpStatus.OK).send(userArts);
  } catch (error) {
    if (error.name === "Bad Request") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}



export async function deleteUserArt(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const { artId } = req.params; 
    const userArts = await userService.deleteUserArt(Number(userId), Number(artId));
    res.status(httpStatus.OK).send(userArts);
  } catch (error) {
    if (error.name === "Bad Request") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}