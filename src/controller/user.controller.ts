import { Request, Response } from "express";
import prisma from "../../config/db.config";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, password, email } = req.body;

    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (findUser) {
      return res.status(400).json({ message: "Email already taken" });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(200).json({
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error, "This is error");
  }
};
