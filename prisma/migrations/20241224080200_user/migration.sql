-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('ADD', 'INPROGRESS', 'ISCOMPLETED');

-- AlterTable
ALTER TABLE "todo" ADD COLUMN     "status" "TodoStatus" NOT NULL DEFAULT 'ADD';
