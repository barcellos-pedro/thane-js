import express from "express"
import config from "../config/config.js"
import Router from "../routes.js"
import ViewEngine from "./ViewEngine.js"

export default class App {
  constructor() {
    this.app = express()
    this.router = Router
    this.#bootstrap()
  }

  static new() {
    return new this()
  }

  start(port = 800) {
    this.port = config({ key: "port", defaultValue: port })
    this.app.listen(this.port, () => this.startLog())
  }

  startLog() {
    console.log(`⚡Application running on http://localhost:${this.port}`)
  }

  #initRoutes() {
    this.router.registerRoutes(this.app)
  }

  #initMiddlewares() {
    this.app.use(express.static("public"))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  #initViews() {
    ViewEngine.setup(this.app)
  }

  #bootstrap() {
    this.#initMiddlewares()
    this.#initViews()
    this.#initRoutes()
  }
}
