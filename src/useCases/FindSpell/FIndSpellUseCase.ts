import { Spell } from "@entities/Spell";
import { ISpellRepository } from "~repositories/ISpellRepository";
import IFindSpellDTO from "./IFindSpellDTO";

export class FindSpellUseCase {
  constructor(private spellRepository: ISpellRepository) {}
  async execute(data: IFindSpellDTO): Promise<Spell> {
    return await this.spellRepository.findById(data.id);
  }
}
