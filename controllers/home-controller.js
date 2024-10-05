// import App from "./app.js"

// const { app } = App.new()

// app.get("/", (req, res) => {
//   res.send("hello world")
// })

class HomeController extends BaseController {
  index() {
    res.render("index", { author: "Pedro" })
  }
}
