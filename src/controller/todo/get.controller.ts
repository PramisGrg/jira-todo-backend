import { Request, Response } from "express";
import getTodoService from "../../services/todo/get.service";

export default async function getTodoController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const userId = req.user?.id ?? "";
    const response = await getTodoService(userId);
    return res
      .status(200)
      .json({ message: "Todos fetched successfully", data: response });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
    res.status(400).json({ message: "unexpected error occured" });
  }
}
