import { PasswordHashing } from "@Utils/PasswordHashing";
import { UserRepositoty } from "@Repositorys/UserRepository";

export class UserService {
  static async createUserService(email: string, password: string) {
    if (!email || !password) {
      throw new Error("Email e senha obrigatorios");
    }

    const hashPassword = await PasswordHashing.hashPassword(password);

    return await UserRepositoty.createUser(email, hashPassword);
  }
}
