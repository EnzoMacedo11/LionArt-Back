import userService from "@/service/users-service";
import { Request, Response } from "express";
import httpStatus from "http-status";
export async function signUp(req: Request, res: Response) {
  const { email, password, name, lastName } = req.body
  try {
    const result = await userService.createUser({ email, password, name, lastName });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({error});
  }
}
