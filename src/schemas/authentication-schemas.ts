
import Joi from "joi";
import { SignInParams } from "../service/signin-service/signIn-service";

export const signInSchema = Joi.object<SignInParams>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
