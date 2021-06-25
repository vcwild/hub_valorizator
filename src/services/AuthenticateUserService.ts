import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

import { UserRepository } from "../repositories/UserRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);
    // Verificar se email existe
    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error("Incorrect email or password")
    }

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Incorrect email or password")
    }

    const token = sign(
      { email: user.email },
      "b76f424331cce6bc1a2c287a3055dbea",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

      return token;
  }
}
