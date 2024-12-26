import prisma from "../../config/db.config";

export default function getTodoService(userId: string) {
  const getTodo = prisma.todo.findMany({
    where: {
      userId,
    },
  });

  return getTodo;
}
