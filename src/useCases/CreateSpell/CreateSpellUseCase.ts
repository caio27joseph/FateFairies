import { ISpell } from "@entities/ISpell";
import { ValidateSpellUseCase } from "@useCases/ValidateSpell/ValidateSpellUseCase";
import { stringify } from "querystring";
import { ICreateSpellRepository } from "src/repositories/ICreateSpellRepository";
import ICreateSpellDTO from "./ICreateSpellDTO";

export class CreateSpellUseCase {
  // Construtor Respositórios e Providers
  constructor(
    private createSpellRepository: ICreateSpellRepository,
    private validateSpellUseCase: ValidateSpellUseCase
  ) {}
  async execute(data: ICreateSpellDTO): Promise<ISpell> {
    // Validar se a Spell é válida
    const errors = await this.validateSpellUseCase.execute(data);
    if (errors) {
      throw new Error("Invalid Spell");
    }
    // Verificar se existe uma
    const exist_spell = await this.createSpellRepository.findByName(data.name);
    if (exist_spell) {
      throw new Error("Spell already exists");
    }

    // Criar Spell
    return await this.createSpellRepository.createSpell(data);
  }
}
