import express from "express"
import Route from "../models/Route.js"

export default class Router {
  routes = []
  #router = express.Router()

  static init() {
    return new this()
  }

  get length() {
    return this.routes.length
  }

  get(path, [controller, action]) {
    const route = this.#getRoute("get", path, controller, action)

    this.routes.push(route)

    return this
  }

  registerRoutes(app) {
    this.routes.forEach(this.#register(app))
    console.log(`[Registered Routes: ${this.length}]`)
    console.table(this.routes)
  }

  #register(app) {
    return ({ method, path, controller, action }) => {
      const routeController = new controller()
      const handler = routeController[action]

      this.#router[method](path, handler)

      app.use(path, this.#router)
    }
  }

  #getRoute(method, path, controller, action) {
    return Route.new({ method, path, controller, action, middleware: "none" })
  }
}
