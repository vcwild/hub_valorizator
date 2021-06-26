import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { getCustomRepository } from "typeorm";

export class ListUserReceivedComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const complimentEntities = await complimentRepository.find({
      where: { user_receiver: user_id },
      // relations: ["userSender", "userReceiver", "tag"],
    });

    return complimentEntities;
  }
}
