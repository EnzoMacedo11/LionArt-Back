import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import { fsync } from "fs";

async function allArts() {
  return prisma.art.findMany();
}

async function allAuthors() {
  return prisma.art.groupBy({
    by:['author'],
  });
}

async function allTypes() {
  return prisma.art.groupBy({
    by:['type'],
  });
}

async function artsByTitle(title:string) {
    return prisma.art.findMany({
        where: {title}
    }
        
    )
}

async function artsById(id:number) {
  return prisma.art.findUnique({
      where: {id}
  }
      
  )
}

async function artsByAuthor(author:string) {
    return prisma.art.findMany({
        where: {author}
    }    
    )
}

async function artsByType(type:string) {
  return prisma.art.findMany({
      where: {type}
  }    
  )
}

async function userArts(userId:number) {
  return prisma.userArts.findMany({
      where: {userId}
  }    
  )
}
const artsRepository = {
  allArts,artsByTitle,artsByAuthor,userArts,allAuthors,allTypes,artsById,artsByType
};

export default artsRepository;
