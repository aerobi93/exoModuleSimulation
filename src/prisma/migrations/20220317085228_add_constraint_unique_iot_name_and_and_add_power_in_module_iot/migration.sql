/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Module_IOT` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Module_IOT" ADD COLUMN     "power" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Module_IOT_name_unique_constraint" ON "Module_IOT"("name");
