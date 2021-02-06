import { IValidateSkillDTO } from "@useCases/ValidateSkill/IValidateSkillDTO";

export interface ISkillProvider {
  validate(data: IValidateSkillDTO): Promise<any>;
}
