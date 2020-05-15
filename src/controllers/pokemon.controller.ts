import { Response, Request } from "express";
import { WELCOME_MESSAGE, ENV_VARS } from "../constants/pokeApi.constants";

export default class PokemonController {
  public sendWelcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }
}
