import validate from "validate.js";
import { IValidateSkillDTO } from "@useCases/ValidateSkill/IValidateSkillDTO";
import { ISkillProvider } from "~providers/ISkillProvider";

export default class ValidatorJsProvider implements ISkillProvider {
  validator = {
    name: {
      presence: { allowEmpty: false },
      type: "string",
    },
    description: {
      presence: { allowEmpty: false },
      type: "string",
    },
  };

  async validate(data: IValidateSkillDTO): Promise<any> {
    return validate(data, this.validator);
  }
}
