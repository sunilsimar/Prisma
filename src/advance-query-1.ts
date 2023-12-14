import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let res = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        //has atleast onoe post published
        some: {
          published: true,
        },
      },
    },
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });
  console.log(res);
}

main();
