import PrismaSpellRepository from "@repositories/PrismaRepository/PrismaSpellRepository";
import { FindSpellUseCase } from "./FIndSpellUseCase";

const spellRepository = new PrismaSpellRepository();

const findSpellUseCase = new FindSpellUseCase(spellRepository);

export { findSpellUseCase };
