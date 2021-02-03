import { ISpellProvider } from "~providers/ISpellProvider";
import { IValidateSpellDTO } from "./IValidateSpellDTO";

export class ValidateSpellUseCase {
  // Construtor Respositórios e Providers
  constructor(private spellProvider: ISpellProvider) {}
  // async execute(data: DTO_NAME) {}
  async execute(data: IValidateSpellDTO): Promise<any> {
    return await this.spellProvider.validate(data);
  }
}
