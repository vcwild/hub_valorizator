import { Request, Response } from "express";
import { ListUserSentComplimentsService as LUSCS } from "../services/ListUserSentComplimentsService";

export class ListUserSentComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSentComplimentsService = new LUSCS();

    const complimentList = await listUserSentComplimentsService.execute(
      user_id
    );

    return response.json(complimentList);
  }
}
