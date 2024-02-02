import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "catid",
        email: "cat@gmail.com",
        name: "Cat",
        phone: "0812345678910",
      },
      select: {
        id: true,
        name: true,
      },
    });
    expect(customer.id).toBe("catid");
    expect(customer.name).toBe("Cat");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      console.info(customer);
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
