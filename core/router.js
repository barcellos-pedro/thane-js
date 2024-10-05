export default class Router {
  routes = []

  static init() {
    return new this()
  }

  get(path, [routeController, action]) {
    this.#addRoute({
      method: "GET",
      controller: routeController,
      path,
      action,
    })

    return this
  }

  registerRoutes(app) {
    this.routes.forEach(({ path, action, controller }) => {
      const routeController = new controller()
      const handler = routeController[action]
      app.use(path, handler)
    })
  }

  #addRoute(routeProps) {
    this.routes.push({ ...routeProps, middleware: "none" })
    console.log("[Routes]\n", this.routes)
  }
}
