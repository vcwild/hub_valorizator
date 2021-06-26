import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";
import { classToPlain } from "class-transformer";

export class ListCreatedTagsService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository);

    const tagEntities = await tagRepository.find();

    return classToPlain(tagEntities);
  }
}
