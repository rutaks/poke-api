import { Pokemon } from "../models/pokemon.model";

export default class PokemonServices {
  static async get() {
    return await Pokemon.find({});
  }

  static async add(pokemon: any) {
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  }
}
