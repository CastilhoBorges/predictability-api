import { Request, Response } from "express";
import { UserService } from "@Services/UserService";

export class UserController {
  static async createUserController(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await UserService.createUserService(email, password);

      res.status(201).json({
        message: "Usuário cadastrado com sucesso",
        user,
      });
    } catch (error: any) {
      res.status(400).json({
        error: error.message || "Erro ao cadastrar o usuario",
      });
    }
  }
}
