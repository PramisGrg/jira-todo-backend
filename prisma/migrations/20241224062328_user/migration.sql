/*
  Warnings:

  - You are about to drop the column `completed` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `inProgress` on the `todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "todo" DROP COLUMN "completed",
DROP COLUMN "inProgress",
ALTER COLUMN "addTodo" SET NOT NULL,
ALTER COLUMN "addTodo" SET DATA TYPE TEXT;
