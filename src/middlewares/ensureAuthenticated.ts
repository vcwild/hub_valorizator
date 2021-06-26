import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Recover token
  const authToken = request.headers.authorization;

  // Validate if token is filled
  if (!authToken) {
    return response
      .status(401)
      .json({ error: "Authentication token is missing" });
  }

  const [, tokenValue] = authToken.split(" ");

  try {
    const { sub } = verify(
      tokenValue,
      "b76f424331cce6bc1a2c287a3055dbea"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ error: err });
  }

  // Validate if token is correct

  // Recover info about the user
}
