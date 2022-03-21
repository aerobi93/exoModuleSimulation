/*
  Warnings:

  - Added the required column `limit` to the `Module_IOT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module_IOT" ADD COLUMN     "limit" INTEGER NOT NULL;
