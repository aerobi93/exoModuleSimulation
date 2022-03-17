/*
  Warnings:

  - You are about to drop the column `log_id` on the `Measure` table. All the data in the column will be lost.
  - Added the required column `module_id` to the `Measure` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_log_id_fkey";

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "log_id",
ADD COLUMN     "module_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module_IOT"("id") ON DELETE CASCADE ON UPDATE CASCADE;
