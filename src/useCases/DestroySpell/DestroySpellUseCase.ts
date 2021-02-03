import { ISpellRepository } from "~repositories/ISpellRepository";
import IDestroySpellDTO from "./IDestroySpellDTO";

export class DestroySpellUseCase {
  constructor(private spellRepository: ISpellRepository) {}
  async execute(data: IDestroySpellDTO) {
    // VERIFICAR SE EXISTE A SPELL COM O ID
    const spell = await this.spellRepository.findById(data.id);
    if (!spell) {
      throw new Error("No spell found");
    }
    // DESTRUIR A SPELL ENCONTRADA
    await this.spellRepository.destroy(spell);
    //
    return spell;
  }
}
