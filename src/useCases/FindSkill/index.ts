import PrismaSkillRepository from "@repositories/PrismaRepository/PrismaSkillRepository";
import { FindSkillUseCase } from "./FindSkillUseCase";

const skillRepository = new PrismaSkillRepository();

const findSkillUseCase = new FindSkillUseCase(skillRepository);

export { findSkillUseCase };
