import prisma from "../../config/db.config";

export async function createTodoService(userId: string, addTodo: string) {
  const newTodo = await prisma.todo.create({
    data: {
      userId,
      addTodo,
    },
  });
  return newTodo;
}
