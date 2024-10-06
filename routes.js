import { default as AppRouter } from "./core/Router.js"
import HomeController from "./controllers/HomeController.js"
import TodosController from "./controllers/TodosController.js"

// TODO: User Service Container to get an instance of core/Router
const Router = AppRouter.init()

Router.get("/", [HomeController, "index"])
Router.get("/todos", [TodosController, "index"])

export default Router
