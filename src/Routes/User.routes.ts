import { BaseRoutes } from "@Utils/BaseRoutes";
import { UserController } from "@Controllers/UserController";
import { authMiddleware } from "@Middlewares/AuthMiddleware";

class UserRoutes extends BaseRoutes {
  protected postRoutes(): void {
    this.router.post("/", UserController.registerUser);
  }
}

export default new UserRoutes().Routes();
