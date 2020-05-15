import { Application } from "express";
import PokemonController from "../controllers/pokemon.controller";

export default class IndexRoute {
  private pokeController: PokemonController;
  constructor(private app: Application) {
    this.pokeController = new PokemonController();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.pokeController.sendWelcomeMessage);
  }
}
