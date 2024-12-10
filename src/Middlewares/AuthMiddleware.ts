import { Request, Response, NextFunction } from "express";
import { JwtAuth } from "@Utils/JwtAuth";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" });
    }

    const decoded = JwtAuth.verifyToken(token) as { userId: string };

    req.body = decoded;

    next();
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
};
