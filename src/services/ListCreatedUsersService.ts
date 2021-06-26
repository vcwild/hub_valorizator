import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { classToPlain } from "class-transformer";

export class ListCreatedUsersService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);

    const userEntities = await userRepository.find();

    return classToPlain(userEntities);
  }
}
