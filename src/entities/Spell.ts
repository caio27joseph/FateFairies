import { Spell as PrismaSpell } from "@prisma/client";

export interface Spell extends PrismaSpell {
  created_at?: number;
  updated_at?: number;
}
