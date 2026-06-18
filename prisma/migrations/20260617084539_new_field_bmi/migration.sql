/*
  Warnings:

  - Added the required column `status` to the `bmi_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bmi_records" ADD COLUMN     "status" TEXT NOT NULL;
