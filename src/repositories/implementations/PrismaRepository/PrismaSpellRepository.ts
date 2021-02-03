import { Spell } from "@entities/Spell";
import { PrismaClient } from "@prisma/client";
import ICreateSpellDTO from "@useCases/CreateSpell/ICreateSpellDTO";
import IDestroySpellDTO from "@useCases/DestroySpell/IDestroySpellDTO";
import { ISpellRepository } from "~repositories/ISpellRepository";

export default class PrismaSpellRepository implements ISpellRepository {
  client = new PrismaClient();
  async findById(id: string): Promise<Spell> {
    const spell = await this.client.spell.findUnique({
      where: { id },
    });
    return spell;
  }
  async destroy(data: IDestroySpellDTO): Promise<Spell> {
    const spell = await this.client.spell.delete({ where: { id: data.id } });
    return spell;
  }
  async findByName(name: string): Promise<Spell> {
    const spell = await this.client.spell.findUnique({
      where: {
        name,
      },
    });
    return spell;
  }
  async create(data: ICreateSpellDTO): Promise<Spell> {
    const spell = await this.client.spell.create({
      data,
    });
    return spell;
  }
}
