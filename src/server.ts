import app from "./app";
import { PORT } from "./constants/pokeApi.constants";

app.listen(PORT, () => console.log(`POKE-API running on port: ${PORT}`));
