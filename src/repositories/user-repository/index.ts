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
      id:true,
      email:true,
      name: true,
      lastName:true
    }
}     
)
}

const userRepository = {
  findByEmail,
  create,
  getUser
};

export default userRepository;
