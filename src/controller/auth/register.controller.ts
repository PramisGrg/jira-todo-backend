import { Request, Response } from "express";
import { loginUserService } from "../../services/auth/register.service";

export async function registerUserController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const data = req.body;
    const response = await loginUserService(data);
    return res
      .status(200)
      .json({ mesage: "Registration successfull", data: response });
  } catch (error: any) {
    res.status(400).json({
      message: error.message || "An unexpected error occurred",
    });
  }
}
