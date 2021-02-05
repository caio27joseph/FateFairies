import { Spell } from "@entities/Spell";
import { PrismaClient } from "@prisma/client";
import ICreateSpellDTO from "@useCases/CreateSpell/ICreateSpellDTO";
import IDestroySpellDTO from "@useCases/DestroySpell/IDestroySpellDTO";
import { ISpellRepository } from "~repositories/ISpellRepository";

export default class PrismaSpellRepository implements ISpellRepository {
  client = new PrismaClient();
  async findById(id: string): Promise<Spell> {
    const spell: Spell = await this.client.spell.findUnique({
      where: { id },
    });
    spell.created_at = spell.createdAt.getTime();
    spell.updated_at = spell.updatedAt.getTime();
    spell.createdAt = null;
    spell.updatedAt = null;
    return spell;
  }
  async destroy(data: IDestroySpellDTO): Promise<Spell> {
    const spell = await this.client.spell.delete({ where: { id: data.id } });
    return spell;
  }
  async findByName(name: string): Promise<Spell> {
    const spell: Spell = await this.client.spell.findUnique({
      where: {
        name,
      },
    });
    spell.created_at = spell.createdAt.getTime();
    spell.updated_at = spell.updatedAt.getTime();
    spell.createdAt = null;
    spell.updatedAt = null;
    return spell;
  }
  async create(data: ICreateSpellDTO): Promise<Spell> {
    const spell: Spell = await this.client.spell.create({
      data,
    });
    spell.created_at = spell.createdAt.getTime();
    spell.updated_at = spell.updatedAt.getTime();
    spell.createdAt = null;
    spell.updatedAt = null;
    return spell;
  }
}
