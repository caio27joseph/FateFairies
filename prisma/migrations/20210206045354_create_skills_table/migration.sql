/*
  Warnings:

  - You are about to drop the `Spell` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "Spell";

-- CreateIndex
CREATE UNIQUE INDEX "Skill.name_unique" ON "Skill"("name");
