/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `Type_measure` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Type_measure_value_key" ON "Type_measure"("value");
