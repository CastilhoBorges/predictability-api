import { Router } from "express";

export abstract class BaseRoutes {
  protected router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.postRoutes();
    this.getRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  protected postRoutes(): void {}
  protected getRoutes(): void {}
  protected putRoutes(): void {}
  protected deleteRoutes(): void {}

  public Routes(): Router {
    return this.router;
  }
}
