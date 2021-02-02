import { IValidateSpellProvider } from "src/providers/IValidateSpellProvider";
import validate from "validate.js";
import { IValidateSpellDTO } from "./IValidateSpellDTO";

export class ValidateSpellUseCase {
  // Construtor Respositórios e Providers
  constructor(private validateSpellProvider: IValidateSpellProvider) {}
  // async execute(data: DTO_NAME) {}
  async execute(data: IValidateSpellDTO): Promise<any> {
    return await this.validateSpellProvider.validateSpell(data);
  }
}
