import { ISpell } from "@entities/ISpell";
import { PrismaClient } from "@prisma/client";
import ICreateSpellDTO from "@useCases/CreateSpell/ICreateSpellDTO";
import { ISpellRepository } from "~repositories/ISpellRepository";

export default class PrismaSpellRepository implements ISpellRepository {
  client = new PrismaClient();
  async findByName(name: string): Promise<ISpell> {
    const spell = await this.client.spell.findUnique({
      where: {
        name,
      },
    });
    if (spell) {
      return spell as ISpell;
    }
    return;
  }
  async create(data: ICreateSpellDTO): Promise<ISpell> {
    const newSpell: ISpell = await this.client.spell.create({
      data,
    });
    return newSpell;
  }
}
