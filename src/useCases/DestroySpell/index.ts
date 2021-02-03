import PrismaSpellRepository from "@repositories/PrismaRepository/PrismaSpellRepository";
import { DestroySpellUseCase } from "./DestroySpellUseCase";

const spellRepository = new PrismaSpellRepository();

const destroySpellUseCase = new DestroySpellUseCase(spellRepository);

export { destroySpellUseCase };
