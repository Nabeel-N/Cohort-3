import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Nabeel N",
      password: "ewrio9390w",
      age: 23,
      city: "Delhi",
    },
  });
}

createUser();
