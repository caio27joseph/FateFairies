import { ISkillRepository } from "~repositories/ISkillRepository";
import IDestroySkillDTO from "./IDestroySkillDTO";

export class DestroySkillUseCase {
  constructor(private skillRepository: ISkillRepository) {}
  async execute(data: IDestroySkillDTO) {
    // VERIFICAR SE EXISTE A SPELL COM O ID
    const skill = await this.skillRepository.findById(data.id);
    if (!skill) {
      throw new Error("No skill found");
    }
    // DESTRUIR A SPELL ENCONTRADA
    await this.skillRepository.destroy(skill);
    //
    return skill;
  }
}
