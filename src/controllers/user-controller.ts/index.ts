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

