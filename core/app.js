import express from "express"
import config from "../config/config.js"

export default class App {
  #instance

  constructor() {
    console.log("[Thane Stack] ☄️")

    this.#instance = express()
    this.port = config({ key: "port", defaultValue: 8080 })

    this.start()
  }

  static new() {
    return new this()
  }

  get app() {
    return this.#instance
  }

  start() {
    this.app.listen(this.port, () =>
      console.log(`⚡Application running on http://localhost:${this.port}`)
    )
  }
}

// TODO: Register Middlewares

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// ----------------------------------------------

// TODO: Set View Engine (Handlebars)

// import hanblebars from "express-handlebars";

// const hbs = hanblebars.create({
//   extname: ".hbs",
//   helpers,
// });

// app.engine(".hbs", hbs.engine);
// app.set("view engine", ".hbs");
// app.set("views", "views");