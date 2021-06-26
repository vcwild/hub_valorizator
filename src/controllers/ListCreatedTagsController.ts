import { Request, Response } from "express";
import { ListCreatedTagsService } from "../services/ListTagService";

export class ListCreatedTagsController {
  async handle(request: Request, response: Response) {
    const listCreatedTagsService = new ListCreatedTagsService();

    const tagList = await listCreatedTagsService.execute();

    return response.json(tagList);
  }
}
