-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_log_id_fkey";

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_log_id_fkey" FOREIGN KEY ("log_id") REFERENCES "Module_IOT"("id") ON DELETE CASCADE ON UPDATE CASCADE;
