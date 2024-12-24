import { Request, Response } from "express";
import updateTodoService from "../../services/todo/update.service";

export default async function updateTodoController(
  req: Request,
  res: Response
) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const response = await updateTodoService(id, status);
    res
      .status(200)
      .json({ message: "Todo status successfully updated", data: response });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
      });
    }
    res.status(400).json({ message: "unexpected error occured" });
  }
}
