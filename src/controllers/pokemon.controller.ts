import { Response, Request } from "express";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";
import { Pokemon } from "../models/pokemon.model";
import { MongooseDocument } from "mongoose";
import PokemonServices from "../services/pokemon.services";
export default class PokemonController {
  public sendWelcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }

  public async getAllPokemon(req: Request, res: Response) {
    try {
      const pokemon = await Pokemon.find({});
      res.respond(200, "Pokemon Retreived Successfully", {
        pokemon,
      });
    } catch (error) {
      console.log(error);
      return res.respond(404, error.message);
    }
  }

  public async getOnePokemon(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pokemon = await Pokemon.findById(id);
      res.respond(200, "Pokemon Retreived Successfully", {
        pokemon,
      });
    } catch (error) {
      console.log(error);
      return res.respond(404, error.message);
    }
  }

  public async addPokemon(req: Request, res: Response) {
    try {
      const newPokemon = await PokemonServices.add(req.body);
      res.respond(200, "Pokemon Added Successfully", {
        newPokemon,
      });
    } catch (error) {
      res.respond(405, error.message);
    }
  }

  public async editPokemon(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedPokemon = Pokemon.findByIdAndUpdate(id, req.body);
      res.respond(200, "Pokemon Updated Successfully", {
        updatedPokemon,
      });
    } catch (error) {
      res.respond(405, error.message);
    }
  }

  public async deletePokemon(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedPokemon = Pokemon.findByIdAndDelete(id);
      res.respond(200, "Pokemon Deleted Successfully", {
        deletedPokemon,
      });
    } catch (error) {
      res.respond(405, error.message);
    }
  }
}
