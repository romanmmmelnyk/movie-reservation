/*
  Warnings:

  - Added the required column `preview_time` to the `Showtime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Showtime" ADD COLUMN     "preview_time" TEXT NOT NULL;
