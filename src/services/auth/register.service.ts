import prisma from "../../../config/db.config";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function registerUserService(data: {
  name: string;
  email: string;
  password: string;
}) {
  let existingUser = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("User with such email already exists, please login");
  }

  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
  };
}
