import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { getCustomRepository } from "typeorm";

export class ListUserSentComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const complimentEntities = await complimentRepository.find({
      where: { user_sender: user_id },
    });

    return complimentEntities;
  }
}
