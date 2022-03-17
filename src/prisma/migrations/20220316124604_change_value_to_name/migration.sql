/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `Type_measure` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_module_id_fkey";

-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_log_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Type_measure_value_key" ON "Type_measure"("value");

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module_IOT"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_log_id_fkey" FOREIGN KEY ("log_id") REFERENCES "Log"("id") ON DELETE CASCADE ON UPDATE CASCADE;
