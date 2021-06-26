import { Request, Response } from "express";
import { ListCreatedUsersService } from "../services/ListCreatedUsersService";

export class ListCreatedUsersController {
  async handle(request: Request, response: Response) {
    const listCreatedUsersService = new ListCreatedUsersService();

    const usersList = await listCreatedUsersService.execute();

    return response.json(usersList);
  }
}
