import hanblebars from "express-handlebars"

export const extname = ".hbs"

export const { engine } = hanblebars.create({ extname })

export function setupViewEngine(setupFn) {
  setupFn(extname, engine)
}

export default class ViewEngine {
  static setup(app) {
    app.engine(extname, engine)
    app.set("view engine", extname)
    app.set("views", "views")
  }
}
