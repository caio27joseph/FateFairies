import { ISpell } from "@entities/ISpell";
import ICreateSpellDTO from "@useCases/CreateSpell/ICreateSpellDTO";

export interface ISpellRepository {
  create(data: ICreateSpellDTO): Promise<ISpell>;
  findByName(name: string): Promise<ISpell>;
}
