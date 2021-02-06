import { ISkillProvider } from "~providers/ISkillProvider";
import { IValidateSkillDTO } from "./IValidateSkillDTO";

export class ValidateSkillUseCase {
  // Construtor Respositórios e Providers
  constructor(private skillProvider: ISkillProvider) {}
  // async execute(data: DTO_NAME) {}
  async execute(data: IValidateSkillDTO): Promise<any> {
    return await this.skillProvider.validate(data);
  }
}
