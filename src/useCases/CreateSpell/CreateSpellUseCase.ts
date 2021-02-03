import { ISpell } from "@entities/ISpell";
import { ValidateSpellUseCase } from "@useCases/ValidateSpell/ValidateSpellUseCase";
import { ISpellRepository } from "~repositories/ISpellRepository";
import ICreateSpellDTO from "./ICreateSpellDTO";

export class CreateSpellUseCase {
  // Construtor Respositórios e Providers
  constructor(
    private spellRepository: ISpellRepository,
    private validateSpellUseCase: ValidateSpellUseCase
  ) {}
  async execute(data: ICreateSpellDTO): Promise<ISpell> {
    // Validar se a Spell é válida
    const errors = await this.validateSpellUseCase.execute(data);
    if (errors) {
      throw new Error("Invalid Spell");
    }
    // Verificar se existe uma
    const exist_spell = await this.spellRepository.findByName(data.name);
    if (exist_spell) {
      throw new Error("Spell already exists");
    }

    // Criar Spell
    return await this.spellRepository.create(data);
  }
}
