import { NextApiRequest, NextApiResponse } from "next";
import { ValidateSkillUseCase } from "./ValidateSkillUseCase";

export class ValidateSkillController {
  constructor(private validateSkillUseCase: ValidateSkillUseCase) {}

  async handle(
    request: NextApiRequest,
    response: NextApiResponse
  ): Promise<void> {}
}
