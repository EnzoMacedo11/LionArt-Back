import { prisma } from "@/config";
import { exclude } from "@/utils/prisma-utils";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function getUser(userId:number) {
  return prisma.user.findUnique({
    where: {id:userId}, 
    select:{
      id:true
    }
}     
)
}

async function artsByUser(userId:number) {
  return prisma.userArts.findMany({
      where: {userId},
      select:{
        artId:true
      }
  }    
  )
}

async function createUserArts(userId: number, artId: number) {
  await prisma.userArts.create({
    data: {
      userId,
      artId
    },
  });
}


  

async function deleteUserArt(userId: number, artId: number) {
  await prisma.userArts.deleteMany({
    where:{
      userId:userId,
      artId:artId
    }
  });
}

const userRepository = {
  findByEmail,
  create,
  getUser,
  artsByUser,
  createUserArts,
  deleteUserArt,

};

export default userRepository;
