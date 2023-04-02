import { cannotEnrollBeforeStartDateError } from "@/errors";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { duplicatedEmailError } from "./errors";

export async function createUser({ email, password,name,lastName }: CreateUserParams): Promise<User> {

  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
    name,
    lastName
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}


async function getUser(userId:number) {
    const result = await userRepository.getUser(userId)
    return result
  
}

async function getArtsByUser(userId: number) {
  const arts = await userRepository.artsByUser(Number(userId));
  return arts;
}

async function createUserArts(userId: number, artsId: number) {
 
  const userArts = await userRepository.createUserArts(Number(userId), Number(artsId));
  return userArts;
}

async function deleteUserArt(userId: number, artsId: number) {
 
  const userArts = await userRepository.deleteUserArt(Number(userId), Number(artsId));
  return userArts;
}




export type CreateUserParams = Pick<User, "email" | "password" | "name" |"lastName">;

const userService = {
  createUser,getUser,getArtsByUser,createUserArts,deleteUserArt
};

export * from "./errors";
export default userService;
