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
    this.app.route("/pokemons/").get(this.pokeController.getAllPokemon);
    this.app.route("/pokemons/:id").get(this.pokeController.getOnePokemon);
    this.app.route("/pokemons/").post(this.pokeController.addPokemon);
    this.app.route("/pokemons/:id").put(this.pokeController.addPokemon);
  }
}
