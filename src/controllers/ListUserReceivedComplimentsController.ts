import { Request, Response } from "express";
import { ListUserReceivedComplimentsService as LURCS } from "../services/ListUserReceivedComplimentsService";

export class ListUserReceivedComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceivedComplimentsService = new LURCS();

    const complimentList = await listUserReceivedComplimentsService.execute(
      user_id
    );

    return response.json(complimentList);
  }
}
