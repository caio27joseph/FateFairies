import { IValidateSpellDTO } from "@useCases/ValidateSpell/IValidateSpellDTO";

export interface IValidateSpellProvider {
  validateSpell(data: IValidateSpellDTO): Promise<any>;
}
