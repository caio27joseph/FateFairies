import { Spell } from "@entities/Spell";
import ICreateSpellDTO from "@useCases/CreateSpell/ICreateSpellDTO";
import IDestroySpellDTO from "@useCases/DestroySpell/IDestroySpellDTO";

export interface ISpellRepository {
  create(data: ICreateSpellDTO): Promise<Spell>;
  findById(id: string): Promise<Spell>;
  findByName(name: string): Promise<Spell>;
  destroy(data: IDestroySpellDTO): Promise<Spell>;
}
