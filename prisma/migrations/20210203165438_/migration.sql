/*
  Warnings:

  - The migration will change the primary key for the `Spell` table. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Spell" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Spell" ("id", "createdAt", "updatedAt", "name", "description", "published") SELECT "id", "createdAt", "updatedAt", "name", "description", "published" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
CREATE UNIQUE INDEX "Spell.name_unique" ON "Spell"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
