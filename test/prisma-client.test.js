import { PrismaClient } from "@prisma/client";

describe("Prisma Client", () => {
  it("should be able to connected", async () => {
    const prisma = new PrismaClient();

    await prisma.$connect();

    // do something (CRUD)

    await prisma.$disconnect();
  });
});
