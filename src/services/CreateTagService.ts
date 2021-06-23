import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";


export class CreateTagService {
  async execute(name: string) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("incorrect name!");
    }

    const tagAlreadyExists = await tagRepository.findOne({name});

    if (tagAlreadyExists) {
      throw new Error("tag already exists!");
    }

    const tag = tagRepository.create({name});

    await tagRepository.save(tag);

    return tag;
  }
}
