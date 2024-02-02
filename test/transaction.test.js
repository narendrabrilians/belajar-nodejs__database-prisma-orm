import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [cat, monkey] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "catid",
          email: "cat@gmail.com",
          name: "Cat",
          phone: "085555555551",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "monkeyid",
          email: "monkey@gmail.com",
          name: "Monkey",
          phone: "085555555552",
        },
      }),
    ]);

    expect(cat.name).toBe("Cat");
    expect(monkey.name).toBe("Monkey");
  });

  it("should can execute interactive transaction", async () => {
    const [cat, monkey] = await prismaClient.$transaction(async (prisma) => {
      const cat = await prisma.customer.create({
        data: {
          id: "catid",
          email: "cat@gmail.com",
          name: "Cat",
          phone: "085555555551",
        },
      });
      const monkey = await prisma.customer.create({
        data: {
          id: "monkeyid",
          email: "monkey@gmail.com",
          name: "Monkey",
          phone: "085555555552",
        },
      });
      return [cat, monkey];
    });

    expect(cat.name).toBe("Cat");
    expect(monkey.name).toBe("Monkey");
  });
});
