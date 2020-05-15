import Mongoose from "mongoose";

const PokemonSchema = new Mongoose.Schema({
  name: String,
  gender: String,
  type: String,
  height: Number,
  weight: Number,
  photo: String,
});

export const Pokemon = Mongoose.model("Pokemon", PokemonSchema);
