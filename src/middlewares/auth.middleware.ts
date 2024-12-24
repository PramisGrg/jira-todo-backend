import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface UserPayload {
  id: string;
  name: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "You're not logged in, please try again" });
  }

  const [tokenType, tokenValue] = token.split(" ");

  if (tokenType !== "Bearer") {
    return res
      .status(401)
      .json({ message: "Sorry, the login method is not valid here" });
  }

  try {
    const decoded = jwt.verify(
      tokenValue,
      process.env.JWT_SECRET ?? "default_jwt_token"
    ) as UserPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
