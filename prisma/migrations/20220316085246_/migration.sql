-- CreateTable
CREATE TABLE "Module_IOT" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "typeMeasure_id" INTEGER NOT NULL,

    CONSTRAINT "Module_IOT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type_measure" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Type_measure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "restart" BOOLEAN,
    "dysfonction" BOOLEAN,
    "surcharge" BOOLEAN,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "module_id" INTEGER NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "log_id" INTEGER NOT NULL,

    CONSTRAINT "Measure_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Module_IOT" ADD CONSTRAINT "Module_IOT_typeMeasure_id_fkey" FOREIGN KEY ("typeMeasure_id") REFERENCES "Type_measure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module_IOT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_log_id_fkey" FOREIGN KEY ("log_id") REFERENCES "Log"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
