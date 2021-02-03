import { IValidateSpellDTO } from "@useCases/ValidateSpell/IValidateSpellDTO";

export interface ISpellProvider {
  validate(data: IValidateSpellDTO): Promise<any>;
}
