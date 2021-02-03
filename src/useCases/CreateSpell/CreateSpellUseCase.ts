import { Spell } from "@entities/Spell";
import { ValidateSpellUseCase } from "@useCases/ValidateSpell/ValidateSpellUseCase";
import { ISpellRepository } from "~repositories/ISpellRepository";
import ICreateSpellDTO from "./ICreateSpellDTO";
import { v4 as uuidv4 } from "uuid";
export class CreateSpellUseCase {
  // Construtor Respositórios e Providers
  constructor(
    private spellRepository: ISpellRepository,
    private validateSpellUseCase: ValidateSpellUseCase
  ) {}
  async execute(data: ICreateSpellDTO): Promise<Spell> {
    // VALIDATE A SPELL
    const errors = await this.validateSpellUseCase.execute(data);
    if (errors) {
      throw new Error("Invalid Spell");
    }
    // search for repeated spells
    const exist_spell = await this.spellRepository.findByName(data.name);
    if (exist_spell) {
      throw new Error("Spell already exists");
    }
    // Define a id
    data.id = uuidv4();
    // Criar Spell
    return await this.spellRepository.create(data);
  }
}
