
import Joi from "joi";
import { CreateUserParams } from "../service/signup-service";

export const createUserSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
});
