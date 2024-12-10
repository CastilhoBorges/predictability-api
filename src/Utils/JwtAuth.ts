import jwt from "jsonwebtoken";

export class JwtAuth {
  private static readonly JWT_SECRET = String(process.env.JWT_SECRET);
  private static readonly JWT_EXPIRATION = "1h";

  public static generateToken(payload: object): string {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRATION,
    });
  }

  public static verifyToken(token: string): string | jwt.JwtPayload {
    try {
      return jwt.verify(token, this.JWT_SECRET);
    } catch {
      throw new Error("Token inválido ou expirado");
    }
  }
}
