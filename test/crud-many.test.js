import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create many", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "catid",
          email: "cat@gmail.com",
          name: "Cat",
          phone: "085555555551",
        },
        {
          id: "monkeyid",
          email: "monkey@gmail.com",
          name: "Monkey",
          phone: "085555555552",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can update many", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        name: "cat",
      },
      where: {
        name: "anggora",
      },
    });

    expect(count).toBe(2);
  });

  it("should can delete many", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "cat",
      },
    });

    expect(count).toBe(0);
  });

  it("should can read many", async () => {
    ({});
    const customers = await prismaClient.customer.findMany;
    console.info(customers);

    expect(customers.length).toBe(0);
  });
});
