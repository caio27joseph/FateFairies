import { NextApiRequest, NextApiResponse } from "next";
import { CreateSkillUseCase } from "./CreateSkillUseCase";

export class CreateSkillController {
  constructor(private createSkillUseCase: CreateSkillUseCase) {}

  async handle(
    request: NextApiRequest,
    response: NextApiResponse
  ): Promise<void> {}
}
