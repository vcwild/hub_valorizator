import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

/**
 * Middleware which finds a user in the user repository and verifies if the user is admin
 * @param request Request object
 * @param response Response object
 * @param next Next function
 * @returns If user is admin returns next function, else raises error unauthorized access
 */
export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const userRepository = getCustomRepository(UserRepository);

  const { admin } = await userRepository.findOne(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized access",
  });
}
