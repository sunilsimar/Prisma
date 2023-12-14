import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

//SELECT * FROM question OFFSET 3 LIMIT 10;
async function main() {
  let res = await prisma.post.findMany({
    take: 10,
    skip: 3,
  });
  console.log(res);
}

main();
