import PrismaSkillRepository from "@repositories/PrismaRepository/PrismaSkillRepository";
import { FindSkillUseCase } from "./FIndSkillUseCase";

const skillRepository = new PrismaSkillRepository();

const findSkillUseCase = new FindSkillUseCase(skillRepository);

export { findSkillUseCase };
