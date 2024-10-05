import hanblebars from "express-handlebars"

const extname = ".hbs"

const { engine } = hanblebars.create({ extname })

export default function setupViewEngine(setupFn) {
  setupFn(extname, engine)
}
