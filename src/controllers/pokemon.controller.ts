import { Response, Request } from "express";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";
import { Pokemon } from "../models/pokemon.model";
import { MongooseDocument } from "mongoose";
export default class PokemonController {
  public sendWelcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.status(404).json({
          status: 200,
          message: error,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Pokemon Found Successfully",
        payload: { pokemon },
      });
    });
  }

  public addPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save((error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.status(404).json({
          status: 200,
          message: error,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Pokemon saved successfully",
        payload: { pokemon },
      });
    });
  }
}
