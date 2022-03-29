/*
  Warnings:

  - You are about to drop the column `limit` on the `Module_IOT` table. All the data in the column will be lost.
  - Added the required column `limit_max` to the `Module_IOT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `limit_min` to the `Module_IOT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localisation` to the `Module_IOT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module_IOT" DROP COLUMN "limit",
ADD COLUMN     "limit_max" INTEGER NOT NULL,
ADD COLUMN     "limit_min" INTEGER NOT NULL,
ADD COLUMN     "localisation" TEXT NOT NULL;
