/*
  Warnings:

  - You are about to drop the column `dysfonction` on the `Log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "dysfonction",
ADD COLUMN     "dysfunction" BOOLEAN;
