import { Skill } from "@entities/Skill";
import { PrismaClient } from "@prisma/client";
import ICreateSkillDTO from "@useCases/CreateSkill/ICreateSkillDTO";
import IDestroySkillDTO from "@useCases/DestroySkill/IDestroySkillDTO";
import { ISkillRepository } from "~repositories/ISkillRepository";

export default class PrismaSkillRepository implements ISkillRepository {
  client = new PrismaClient();
  async findById(id: string): Promise<Skill> {
    const skill: Skill = await this.client.skill.findUnique({
      where: { id },
    });
    return skill;
  }
  async destroy(data: IDestroySkillDTO): Promise<Skill> {
    const skill = await this.client.skill.delete({ where: { id: data.id } });
    return skill;
  }
  async findByName(name: string): Promise<Skill> {
    const skill: Skill = await this.client.skill.findUnique({
      where: {
        name,
      },
    });
    return skill;
  }
  async create(data: ICreateSkillDTO): Promise<Skill> {
    const skill: Skill = await this.client.skill.create({
      data,
    });
    return skill;
  }
}
