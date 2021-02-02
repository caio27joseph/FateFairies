import { ISpell } from "@entities/ISpell";
import { ICreateSpellRepository } from "../ICreateSpellRepository";
import { PrismaClient } from "@prisma/client";
import ICreateSpellDTO from "@useCases/CreateSpell/ICreateSpellDTO";

export class PrismaRepository implements ICreateSpellRepository {
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
  client = new PrismaClient();
  async createSpell(data: ICreateSpellDTO): Promise<ISpell> {
    const newSpell: ISpell = await this.client.spell.create({
      data,
    });
    return newSpell;
  }
}
