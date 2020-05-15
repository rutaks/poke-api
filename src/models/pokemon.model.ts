import Mongoose from "mongoose";

const PokemonSchema = new Mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  gender: String,
  type: String,
  height: {
    type: Number,
    required: true,
  },
  weight: Number,
  photo: String,
  pokedexNumber: {
    type: Number,
    unique: true,
  },
});

export const Pokemon = Mongoose.model("Pokemon", PokemonSchema);
