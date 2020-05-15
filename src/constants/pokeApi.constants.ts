import * as dotenv from "dotenv";
dotenv.config();

class EnvVars {
  MONGO_URL;
  constructor(MONGO_URL: any) {
    this.MONGO_URL = MONGO_URL;
  }
}

const getVariables = (): EnvVars => {
  switch (process.env.NODE_ENV) {
    case "development":
      return new EnvVars(process.env.MONGO_URL_DEV);
    case "test":
      return new EnvVars(process.env.MONGO_URL_TEST);
    case "production":
      return new EnvVars(process.env.MONGO_URL_PRODUCTION);
    default:
      return new EnvVars(process.env.MONGO_URL_DEV);
  }
};

export const PORT: Number = 3000;
export const WELCOME_MESSAGE: String = "Welcome to the Poke API";
export const ENV_VARS: EnvVars = getVariables();
