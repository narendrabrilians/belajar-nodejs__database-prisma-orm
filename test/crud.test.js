import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("Should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "catid",
        email: "cat@gmail.com",
        name: "Cat",
        phone: "0812345678910",
      },
    });

    expect(customer.id).toBe("catid");
    expect(customer.email).toBe("cat@gmail.com");
    expect(customer.name).toBe("Cat");
    expect(customer.phone).toBe("0812345678910");
  });

  it("Should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        phone: "087777777777",
      },
      where: {
        id: "catid",
      },
    });

    expect(customer.id).toBe("catid");
    expect(customer.email).toBe("cat@gmail.com");
    expect(customer.name).toBe("Cat");
    expect(customer.phone).toBe("087777777777");
  });

  it("Should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "catid",
      },
    });

    expect(customer.id).toBe("catid");
    expect(customer.email).toBe("cat@gmail.com");
    expect(customer.name).toBe("Cat");
    expect(customer.phone).toBe("087777777777");
  });
});

it("Should be able to delete customer", async () => {
  const customer = await prismaClient.customer.delete({
    where: {
      id: "catid",
    },
  });

  expect(customer.id).toBe("catid");
  expect(customer.email).toBe("cat@gmail.com");
  expect(customer.name).toBe("Cat");
  expect(customer.phone).toBe("087777777777");
});
