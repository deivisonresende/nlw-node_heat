import { GetProfileUserService } from "../services/GetProfileUserService";
import { Request, Response } from "express";

export class GetProfileUserController {
  async handle(request: Request, response: Response){
    const { user_id } = request;
    const service = new GetProfileUserService();

    const user = await service.execute(user_id);

    return response.json(user);
  }
}