import { Router } from "express";
import { UserController } from "@Controllers/UserController";

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.postRoutes();
  }

  private postRoutes() {
    this.router.post("/", UserController.registerUser);
  }

  public getRoutes(): Router {
    return this.router;
  }
}

export default new UserRoutes();
