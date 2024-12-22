import { Request, Response } from "express";
import { userLoginService } from "../../services/auth/login.service";

export async function loginUserController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const data = req.body;
    const { responseData, token } = await userLoginService(data);
    return res.status(200).json({
      message: "User logged in successfully",
      data: { ...responseData, token },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(400).json({ message: "An unexpected error occured" });
  }
}
