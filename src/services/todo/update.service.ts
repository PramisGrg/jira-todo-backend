import prisma from "../../../config/db.config";
import { TodoStatus } from "@prisma/client";

export default async function updateTodoService(
  id: string,
  status: TodoStatus
) {
  const existingTodo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });

  if (!existingTodo) {
    throw new Error("Requested Todo not found");
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });

  return updatedTodo;
}
