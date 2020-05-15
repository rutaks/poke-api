import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import IndexRoute from "./routes/index.route";
import mongoose from "mongoose";
import errorMiddleware from "./middlewares/error.middleware";
import { ENV_VARS } from "./constants/pokeApi.constants";
import { response } from "express";

declare module "express-serve-static-core" {
  export interface Response {
    respond(status: number, message: String, data?: any): this;
  }
}

response.respond = function (status, message, data = {}) {
  return this.status(status).json({
    status: status,
    message: message,
    payload: data,
  });
};

class App {
  public app: Application;
  public indexRoute: IndexRoute;

  constructor() {
    this.app = express();
    this.setConfig();
    this.indexRoute = new IndexRoute(this.app);
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(errorMiddleware);
    this.app.use(cors());
    mongoose.Promise = global.Promise;
    mongoose.connect(ENV_VARS.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().app;
