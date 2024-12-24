import { Request, Response } from "express";
import { createTodoService } from "../../services/todo/create.service";

export async function createTodoController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { addTodo } = req.body;
    const userId = req.user?.id ?? "";
    const response = await createTodoService(userId, addTodo);
    return res
      .status(200)
      .json({ message: "Todo successfully added", data: response });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(400).json({ message: "unexpected error occured" });
  }
}
