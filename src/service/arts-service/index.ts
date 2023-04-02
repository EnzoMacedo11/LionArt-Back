import artsRepository from "@/repositories/arts-repository";
import { exclude } from "@/utils/prisma-utils";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function getAllArts() {
  const arts = await artsRepository.allArts();

  return arts;
}

async function getAllAuthors() {
  const arts = await artsRepository.allAuthors();

  return arts;
}

async function getAllTypes() {
  const arts = await artsRepository.allTypes();

  return arts;
}

async function getArtsByTitle(title: string) {
  const arts = await artsRepository.artsByTitle(title);
  return arts;
}

async function getArtsById(id: number) {
  const arts = await artsRepository.artsById(id);
  return arts;
}

async function getArtsByAuthor(author: string) {
  const arts = await artsRepository.artsByAuthor(author);
  return arts;
}

async function getArtsByType(type: string) {
  const arts = await artsRepository.artsByType(type);
  return arts;
}

async function getUserArts(userId: number) {
  const userArts = await artsRepository.userArts(userId);
  return userArts;
}

async function createUserArts(userId: number, artsId: number) {
 
  const userArts = await artsRepository.createUserArts(userId, artsId);
  return userArts;
}

const artsService = {
  getAllArts,
  getArtsByTitle,
  getArtsByAuthor,
  getUserArts,
  getAllAuthors,
  getAllTypes,
  getArtsById,
  getArtsByType,
  createUserArts
};

export default artsService;
