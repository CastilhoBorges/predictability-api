import { User } from "@Models/Entity/User";

export class UserRepositoty {
  static async createUser(email: string, passwordHash: string) {
    return await User.create({
      email,
      password_hash: passwordHash,
    });
  }
}
