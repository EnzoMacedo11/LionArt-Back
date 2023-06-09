import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "./config";
import { signInRouter } from "./routers/signin-router";
import { signUpRouter } from "./routers/signup-router";
import { artsRouter } from "./routers/arts-routers";
import { userRouter } from "./routers/user-routers";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/signin",signInRouter)
  .use("/signup",signUpRouter)
  .use("/arts",artsRouter)
  .use("/user",userRouter)
  

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
