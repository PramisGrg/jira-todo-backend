import prisma from "../../../config/db.config";
import bcrypt from "bcrypt";
import generateWebToken from "../../utils/generate.token";

export async function userLoginService(data: {
  email: string;
  password: string;
}) {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (!existingUser) {
    throw new Error("No user with such details was found");
  }

  const isPasswordValid = await bcrypt.compare(
    data.password,
    existingUser.password
  );
  if (!isPasswordValid) {
    throw new Error("Wrong Password, please check correctly and enter again");
  }

  const responseData = {
    name: existingUser.name,
    email: existingUser.email,
    password: existingUser.password,
  };

  const token = generateWebToken(responseData, "15d");

  return { responseData, token };
}
