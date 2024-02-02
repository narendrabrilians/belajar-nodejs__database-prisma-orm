import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to query sql", async () => {
    const id = 1;
    const name = "Cat";

    const samples =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const sample of samples) {
      console.info(sample);
    }
  });
});
